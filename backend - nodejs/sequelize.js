"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'LearningFactDb',
    username: 'learningDbUser',
    password: 'nQK7832S',
});
sequelize.authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
exports.default = sequelize;
