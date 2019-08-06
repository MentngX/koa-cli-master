const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')


const Doctor = sequelize.define('doctor',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: Sequelize.STRING(10),
        sex: Sequelize.STRING(45),
        date: Sequelize.DATE,
        education: Sequelize.STRING(45),
        major: Sequelize.STRING(45),
        position: Sequelize.STRING(45),
        department: Sequelize.STRING(255),
    },{
        // 不要擅自添加时间戳属性
        timestamps: false,
        // 不要擅自将表名变为复数
        freezeTableName: true
    }


)

module.exports = Doctor