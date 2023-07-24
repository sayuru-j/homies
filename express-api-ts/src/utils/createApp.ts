import express, { Express } from "express";
import routes from "../routes";
import cors from "cors";
import { corsConfig, sessionConfig } from "./config";
import session from "express-session";

export function createApp(): Express {
  const app = express();

  // Enable parsing middleware for requests
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Enable cors middleware
  app.use(cors(corsConfig));

  // Enable session middleware
  app.use(session(sessionConfig));

  app.use("/api", routes);

  return app;
}
