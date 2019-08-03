const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')
const Doctor = require('./DoctorModel')

const Shift = sequelize.define('shift',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      d_id: Sequelize.INTEGER(10),
      date: Sequelize.DATE,
      time: Sequelize.STRING(45),
      name: Sequelize.STRING(45),
      sex: Sequelize.STRING(45),
      department: Sequelize.STRING(45),
      phone: Sequelize.STRING(45),
      text: Sequelize.STRING(45),
      sign: Sequelize.STRING(45)
},{
      // 不要擅自添加时间戳属性
    timestamps: false,
      // 不要擅自将表名变为复数
    freezeTableName: true
}


)

// 构建和 Doctor 表的关联关系 （一个医生可拥有多个轮班信息）
Shift.belongsTo(Doctor, { foreignKey:'d_id', as: 'doctorInfo'})


module.exports = Shift