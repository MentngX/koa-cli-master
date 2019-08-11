const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')


const Drug = sequelize.define('drug',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: Sequelize.STRING(45),
        inventory: Sequelize.INTEGER(5),//库存
        singlePrice: Sequelize.DECIMAL(10,2),//单价
        dosageForm:Sequelize.STRING(45),//剂型
        specification: Sequelize.STRING(45),//规格
        productionDate: Sequelize.STRING(45),//生产日期
        shelfLife: Sequelize.STRING(45),//保质期
        manufacturer: Sequelize.STRING(45),//生产厂家
        type: Sequelize.STRING(45),//中药？西药？
        OTC: Sequelize.STRING(45),//处方药？非处方药？
        certificate: Sequelize.STRING(45),//批准文号
    },{
        // 不要擅自添加时间戳属性
        timestamps: false,
        // 不要擅自将表名变为复数
        freezeTableName: true
    }


)

module.exports = Drug