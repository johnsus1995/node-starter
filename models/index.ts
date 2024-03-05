// "use strict";

// // Import required modules
// const fs = require("fs"); // File system module
// const path = require("path"); // Path module
// const Sequelize = require("sequelize"); // Sequelize ORM
// const process = require("process"); // Process module for environment variables

// // Get the base name of the current file
// const basename = path.basename(__filename);

// // Determine the environment (default to 'development')
// const env = process.env.NODE_ENV || "development";

// // Load database configuration based on environment
// const config = require(__dirname + "/../config/config.js")[env];

// // Initialize an empty object to store models
// const db = {};

// // Initialize Sequelize instance
// let sequelize;
// if (config.use_env_variable) {
//   // If using environment variable for database connection
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   // If using database connection parameters from config
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// // Read all files in the current directory
// fs.readdirSync(__dirname)
//   // Filter out files that are not models or test files
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && // Exclude files starting with a dot
//       file !== basename && // Exclude the current file itself
//       file.slice(-3) === ".ts" && // Include only TypeScript files
//       file.indexOf(".test.js") === -1 // Exclude test files
//     );
//   })
//   // For each model file, load the model into the db object
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

// // Associate models if an associate function is defined for them
// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// // Attach Sequelize instance and Sequelize constructor to the db object
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// // Export the db object, containing all models and the Sequelize instance
// module.exports = db;

/**
 * ***************************************************
 * ***************************************************
 */

import { Sequelize, Options } from "sequelize";
require("dotenv").config();
const options: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT as any,
  dialect: "postgres",
  host: process.env.DB_HOST,
  sync: { alter: true, logging: true },
  logging: true,
};

const sequelize = new Sequelize(options);

export default sequelize;
