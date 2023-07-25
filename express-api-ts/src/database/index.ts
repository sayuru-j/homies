import mongoose from "mongoose";

// Select the database environment dependent on the ENVIRONMENT environment variable
export const dbEnvironment: string =
  process.env.ENVIRONMENT === "production"
    ? process.env.MONGODB_URI!
    : "mongodb://localhost:27017/homies";

async function main() {
  try {
    const connected = await mongoose.connect(dbEnvironment, {});
    if (connected)
      console.log(`Connected to MongoDB as ${process.env.ENVIRONMENT}`);
  } catch (error) {
    console.log(error);
  }
}

main();
