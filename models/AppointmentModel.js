const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')
const Doctor = require('./DoctorModel')
const Patient = require('./PatientModel')

const Reg = sequelize.define('appointment',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      u_id: Sequelize.STRING(19),
      d_id: Sequelize.INTEGER(10),
      u_name: Sequelize.STRING(10),
      time: Sequelize.TIME,
      line: Sequelize.INTEGER(10),
      department: Sequelize.STRING(255),
      expense: Sequelize.DECIMAL(10,2)
},{
      // 不要擅自添加时间戳属性
    timestamps: false,
      // 不要擅自将表名变为复数
    freezeTableName: true
}


)

// 构建和 Doctor 表的关联关系 （一个医生可拥有多个挂号信息）
Reg.belongsTo(Doctor, { foreignKey:'d_id', as: 'doctorInfo'})
// 构建和 Patient 表的关联关系 （一个病人可拥有多个挂号信息）
Reg.belongsTo(Patient, { foreignKey:'u_id', as: 'patientInfo'})

module.exports = Reg