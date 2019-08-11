const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')
const Patient = require('./PatientModel')

const Pay = sequelize.define('pay',{
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true
        },
        date: Sequelize.DATE,
        type: Sequelize.STRING(45),
        price: Sequelize.DECIMAL(10,2),
        form: Sequelize.STRING(45),
        appointId: Sequelize.INTEGER(11),
        p_id: Sequelize.STRING(18),
        // number: Sequelize.INTEGER(11)
    },{
        // 不要擅自添加时间戳属性
        timestamps: false,
        // 不要擅自将表名变为复数
        freezeTableName: true
    }
)
// 构建和 Patient 表的关联关系 （一个病人可拥有多个付款信息）
Pay.belongsTo(Patient, { foreignKey:'p_id', as: 'patientInfo'})
module.exports = Pay