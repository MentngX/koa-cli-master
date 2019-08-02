const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')


const Patient = sequelize.define('patient',{
        id: {
            type: Sequelize.STRING(18),
            primaryKey: true
        },
        date: Sequelize.DATE,
        name: Sequelize.STRING(10),
        age: Sequelize.STRING(10),
        phone: Sequelize.STRING(11),
        sex: Sequelize.STRING(255),
        address: Sequelize.STRING(255),
        l_name: Sequelize.STRING(45),
        l_phone: Sequelize.STRING(45),
        disease: Sequelize.STRING(45),
        history: Sequelize.STRING(45),
        department: Sequelize.STRING(45),
        doctor: Sequelize.STRING(45)
    },{
        // 不要擅自添加时间戳属性
        timestamps: false,
        // 不要擅自将表名变为复数
        freezeTableName: true
    }


)

module.exports = Patient