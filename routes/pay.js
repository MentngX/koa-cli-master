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

/**计算缴费金额 
 * /api/pay/add
*/
router.post('/add', async function (ctx, next) { 
    const {p_id, type, date, appointId, preId,form} = ctx.request.body // 两个选择，如果是处方收费就传preId，如果是挂号收费就传 appointId
    var price = 0.00
    var test = {}
    if (type === '处方收费'){
        price = 100  //先用假数据
    }else if (type === '挂号收费'){
        const reg = await Reg.findAll({
            where:{id: appointId},
        })
        price = reg[0].expenses
    }
    const newPayList = await Pay.create({
        p_id, type, date, appointId, preId, price,form
    })
    if(newPayList){
        ctx.body = {
            success: true,
            msg: '保存成功'
        }
        ctx.status = 200;
    }else {
        ctx.body = {
            success: false,
            msg: '发生错误'
        }
        ctx.status = 400
        console.log('error')
    }
})

/**获取缴费金额
 * /api/pay/price
 */
router.get('/price',async function(ctx,next){
    const id = ctx.query.id
    const pay = await Pay.findOne({
        where: {
            id
        }
    })
    const price = pay.price
    if(pay){
        ctx.body = {
            success: true,
            price
        }
        ctx.status = 200;
    }else {
        ctx.body = {
            success: false,
            msg: '发生错误'
        }
        ctx.status = 400
        console.log('error')
    }
})



module.exports = router.routes()