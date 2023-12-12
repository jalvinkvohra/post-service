import dotenv, { DotenvConfigOptions } from "dotenv";

const dotEnvOptions: DotenvConfigOptions = {};
if (process.env.NODE_ENV) {
  dotEnvOptions.path = `.env.${process.env.NODE_ENV}`;
}

dotenv.config(dotEnvOptions);

import { app } from "./config/app";
import sequelize from "./config/db";

app.listen(8000, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connected to db!!!");
  } catch (e) {
    console.log("Error connecting database !!");
  }
  console.log("Listening to port 8000");
});
