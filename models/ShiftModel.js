const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')


const Shift = sequelize.define('shift',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
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

module.exports = Shift