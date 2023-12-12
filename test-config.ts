import sequelize from "./src/config/db";

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.drop();
    sequelize.sync();
    return true;
  } catch (e) {
    return false;
  }
};

beforeAll(async () => {
  await initDatabase();
});

jest.setTimeout(30000);
