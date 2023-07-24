import { CorsOptions } from "cors";
import { SessionOptions } from "express-session";

export const corsConfig: CorsOptions = {
  origin: [process.env.CLIENT_URL!],
  credentials: true,
};

export const sessionConfig: SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  },
};
