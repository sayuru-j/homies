import { CorsOptions } from "cors";
import { SessionOptions } from "express-session";
import store from "connect-mongo";
import { dbEnvironment } from "../../database";

export const corsConfig: CorsOptions = {
  origin: [process.env.CLIENT_URL!],
  credentials: true,
};

export const sessionConfig: SessionOptions = {
  secret: "C436C3EF8EC7F38A24F6779FFF187",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  },
  store: store.create({
    mongoUrl: dbEnvironment,
  }),
};
