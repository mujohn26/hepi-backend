require('dotenv').config();

module.exports.development = {
  // url: process.env.DATABASE_URL_DEV,
  // dialect: 'postgres',
  // logging: false,
  username: "root",
  password: "root",
  database: "hepi_dev",
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports.testing = {
  url: process.env.DATABASE_URL_TEST,
  dialect: 'postgres',
  logging: false
};

module.exports.production = {
  url: process.env.DATABASE_URL,
  dialect: 'postgresql',
  logging: false
};
