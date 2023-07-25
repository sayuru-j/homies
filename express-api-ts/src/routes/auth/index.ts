import { Router } from "express";
import passport, { AuthenticateOptions } from "passport";
import { authOptions } from "../../utils/strategies/google";

const router = Router();

router.get(
  "/google",

  // passport.authenticate() which accepts 2 arguments, first one is the "strategy" we want to use i.e Google in our case,
  // the second is an object that defines the scope.
  passport.authenticate("google", authOptions),
  (req, res) => res.send(200)
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) =>
  res.send("Success!")
);

router.get("/status", (req, res) => {
  return req.user
    ? res.send(req.user)
    : res.status(401).send({
        msg: "Unauthorized",
      });
});

export default router;
