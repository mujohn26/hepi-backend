// import fs from 'fs';
// import path from 'path';
// import Sequelize from 'sequelize';
// import { development, production, testing } from '../config/config';

// const environment = {
//   development,
//   production,
//   testing
// };
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV;
// const config = environment[env];
// const db = {};
// const sequelize = new Sequelize(config.url, config);
// fs
//   .readdirSync(__dirname)
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });
// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// export default db;


const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.development.database, dbConfig.development.username, dbConfig.development.password, {
  host: dbConfig.development.host,
  dialect: dbConfig.development.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.development.pool.max,
    min: dbConfig.development.pool.min,
    acquire: dbConfig.development.pool.acquire,
    idle: dbConfig.development.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require("./admin.js")(sequelize, sequelize);
db.advesoryCenter = require("./advesorycenter")(sequelize, sequelize);
db.agent = require("./agent")(sequelize, sequelize);
db.agentCash =  require("./agentcash")(sequelize, sequelize);
db.bookings =  require("./bookings")(sequelize, sequelize);
db.client =  require("./client")(sequelize, sequelize);
db.counseling =  require("./counseling")(sequelize, sequelize);
db.doctor =  require("./doctor")(sequelize, sequelize);
db.homeProgram =  require("./homeprogram")(sequelize, sequelize);
db.servicePricing = require("./servicepricing")(sequelize, sequelize);
db.services = require("./services")(sequelize, sequelize);
db.user =  require("./user")(sequelize, sequelize);
db.mperekeza =  require("./mperekeza")(sequelize, sequelize);
db.testimonial =  require("./testimonial")(sequelize, sequelize);
db.partner =  require("./partners")(sequelize, sequelize);

module.exports = db;