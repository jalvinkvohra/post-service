import { Sequelize } from "sequelize";

let sequelize: Sequelize;

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "test") {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db/test.sqlite"
  });
} else {
  sequelize = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    password: process.env.DB_PASS || "root",
    username: process.env.DB_USER || "postgres",
    logging: false
  });
}

export default sequelize;
