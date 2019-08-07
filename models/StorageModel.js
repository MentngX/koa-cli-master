const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')

const Storage = sequelize.define('storage',{
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true
        },
        name: Sequelize.STRING(45),
        unitPrice: Sequelize.DECIMAL(10,2),
        manufacturers: Sequelize.STRING(45),
        amount: Sequelize.INTEGER(11),
        handlers: Sequelize.STRING(45),
        temperature: Sequelize.STRING(45),
        qualityOfficer: Sequelize.STRING(45),
        warehouseman: Sequelize.STRING(45),
        pattern: Sequelize.STRING(45),
        species: Sequelize.STRING(45),
        productionDate: Sequelize.DATE,
        dosageForm: Sequelize.STRING(45),
        inDate: Sequelize.DATE
    },{
        // 不要擅自添加时间戳属性
        timestamps: false,
        // 不要擅自将表名变为复数
        freezeTableName: true
    }
)

module.exports = Storage