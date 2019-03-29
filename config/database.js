const Sequelize = require("sequelize");

const sequelize = new Sequelize("express_jobs","root", process.env.MYSQL_PASSWORD,{
    host:"localhost",
    dialect:"mysql"
});

module.exports = sequelize;

