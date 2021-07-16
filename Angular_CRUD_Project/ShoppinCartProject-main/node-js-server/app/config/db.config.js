module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "M8$tek12",
  DB: "product_db_01",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
