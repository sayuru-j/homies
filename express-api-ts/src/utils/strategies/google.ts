import { Strategy, VerifyCallback } from "passport-google-oauth2";
import passport, { AuthenticateOptions, Profile } from "passport";
import { User } from "../../database/schemas";

// Creating an extended authentication options to inherit from the default
interface ExtendedAuthenticateOptions extends AuthenticateOptions {
  accessType?: string;
  authType?: string;
  includeGrantedScopes?: boolean;
}

export const authOptions: ExtendedAuthenticateOptions = {
  accessType: "offline",
  prompt: "consent",
  authType: "session",
  includeGrantedScopes: true,
  scope: ["openid", "profile", "email"],
};

export const passportStrategy = () => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: process.env.GOOGLE_REDIRECT_URL!,
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback
      ) => {
        try {
          const existingUser = await User.findOneAndUpdate(
            { googleId: profile.id },
            { accessToken, refreshToken },
            { new: true }
          );
          if (existingUser) return done(null, existingUser);
          const newUser = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails?.[0].value,
            accessToken,
            refreshToken,
          });
          return done(null, newUser);
        } catch (error) {
          console.log(error);
          return done(error, undefined);
        }
      }
    )
  );

  passport.serializeUser((user: any, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await User.findById(id);
      return user ? done(null, user) : done(null, false);
    } catch (error) {
      console.log(error);
      return done(error, undefined);
    }
  });
};
