/** 
 * 药库
 */

const router = require('koa-router')()
const Storage = require('../models/StorageModel')

// 引入sequelize操作符
const Op = require('sequelize').Op
// 引入sequelize
const Sequelize = require('sequelize')

// router.prefix('/api/storage')

/** 
 * 进药
 * /api/storage/add
 */
router.post('/add', async (ctx, next) => {
    const {name, manufacturers, amount, handlers, temperature, qualityOfficer, warehouseman, pattern,
        species, productionDate, dosageForm, unitPrice, inDate
    } = ctx.request.body

    const newStorageList = await Storage.create({
        name, manufacturers, amount, handlers, temperature, qualityOfficer, warehouseman, pattern,
        species, productionDate, dosageForm, unitPrice, inDate
    })
    if(newStorageList){
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

/**获得所有药品信息
 *  /api/storage/list
 */
router.get('/list', async ctx => {
    const storage = await Storage.findAll()
    ctx.status = 200
    ctx.body = {
        storage
    }
})



router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})


module.exports = router.routes()