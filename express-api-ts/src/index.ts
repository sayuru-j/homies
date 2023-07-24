import { config } from "dotenv";
config();

import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

async function main() {
  try {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    console.log(`Environment mode: ${process.env.ENVIRONMENT}`);
  } catch (error) {
    console.log(error);
  }
}

main();
