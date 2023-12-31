import {DataTypes, Sequelize} from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'LearningFactDb',
    username: 'learningDbUser',
    password: 'nQK7832S',
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err: Error) => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;