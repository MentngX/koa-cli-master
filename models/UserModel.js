const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: Sequelize.STRING(45),
  password: Sequelize.STRING(45),
  role: Sequelize.STRING(45),
},{
  // 不要擅自添加时间戳属性
  timestamps: false,
  // 不要擅自将表名变为复数
  freezeTableName: true
})

module.exports = User