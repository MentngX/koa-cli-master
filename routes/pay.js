/**
 * 付款信息
 */

const router = require('koa-router')()

const Reg = require('../models/AppointmentModel')
const Patient = require('../models/PatientModel')
const Pay = require('../models/PayModel')

// 引入sequelize操作符
const Op = require('sequelize').Op
// 引入sequelize
const Sequelize = require('sequelize')

// router.prefix('/api/pay')


router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})


module.exports = router.routes()