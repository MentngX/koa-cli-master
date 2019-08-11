const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')
const Patient = require('./PatientModel')

const Pre= sequelize.define('prescription',{
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true
        },
        date: Sequelize.DATE,
        patientId: Sequelize.STRING(18),
        patientName: Sequelize.STRING(10),
        // age: Sequelize.STRING(10),
        // sex: Sequelize.STRING(2),
        // phone: Sequelize.STRING(45),
        // address: Sequelize.STRING(255),
        doctor: Sequelize.STRING(45),
        department: Sequelize.STRING(45),
        // drugName:Sequelize.STRING(255),
        // usage:Sequelize.STRING(255),
        // dosage:Sequelize.STRING(255),
        text: Sequelize.STRING(255),//备注
        auditor: Sequelize.STRING(45),//审核人员
        // drug: Sequelize.JSON

    },{
        // 不要擅自添加时间戳属性
        timestamps: false,
        // 不要擅自将表名变为复数
        freezeTableName: true
    }

)
// 构建和 Patient 表的关联关系 （一个病人可拥有多个处方信息）
Pre.belongsTo(Patient, { foreignKey:'patientId', as: 'patientInfo'})

module.exports = Pre