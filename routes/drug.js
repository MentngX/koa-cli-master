
const router = require('koa-router')()

// 引入DrugModel实例
const Drug = require('../models/DrugModel')
// 引入sequelize操作符
const Op = require('sequelize').Op
// 引入sequelize
const Sequelize = require('sequelize')

// router.prefix('/api/drug')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

/**获取药品信息
 * /api/drug/list
 */
router.get('/list', async ctx => {
    const drugs = await Drug.findAll()
    ctx.status = 200
    ctx.body = {
        drugs
    }
})

/**查询药品信息
 * /api/drug/namequery
 * 传入参数 drugName
 */
router.get('/namequery', async ctx =>{
    const keyword = ctx.query.drugName

    const res = await Drug.findAll({
        where:{
            name : {[Op.like]: '%' + keyword + '%'}
        }
    })

    if (res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'get drug information success',
            datalist: res
        }
        return
    }
    ctx.status = 400
})

/**修改药品信息
 * /api/drug/update
 */
router.post('/update', async (ctx,next) =>{
    const id = ctx.request.body.id
    const data = await Drug.findOne({
        where: {
            id
        }
    })

    const params = ctx.request.body
    const res = data.update(params)

    console.log(params)

    if(res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'update drug success'
        }
        return
    } else{
        ctx.status = 400
    }
})





module.exports = router.routes()
