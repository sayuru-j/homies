import { createApp } from "./utils/createApp";

const PORT = process.env.PORT || 8080;

async function main() {
  console.log(`Environment mode: ${process.env.ENVIRONMENT}`);

  try {
    const app = createApp();
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

main();
