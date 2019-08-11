const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')
const Pre = require('./PrescriptionModel')

const Pretext= sequelize.define('pretext',{
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true
        },
        preId: Sequelize.INTEGER(11),
        sort: Sequelize.STRING(45),
        drugName: Sequelize.STRING(45),
        quantity: Sequelize.DECIMAL(10,2),
        usage: Sequelize.STRING(45)

    },{
        // 不要擅自添加时间戳属性
        timestamps: false,
        // 不要擅自将表名变为复数
        freezeTableName: true
    }

)

module.exports = Pretext