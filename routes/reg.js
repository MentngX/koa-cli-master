/**
 * 挂号信息 */


const router = require('koa-router')()

const Reg = require('../models/AppointmentModel')
const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')

// router.prefix('/api/reg')

/**获得所有挂号信息
 *  /api/reg/list
 */
router.get('/list', async ctx => {
    const regs = await Reg.findAll()
    ctx.status = 200
    ctx.body = {
      regs
    }
  })

  /**根据医生姓名搜索挂号信息
   * /api/reg/query
   * 传参数 doctorName 过去，得到信息
   */
router.get('/query', async ctx =>{
    const name = ctx.query.doctorName
    const res = await Reg.findAll({
        where:{
            name
        },
        include:{
            model: Doctor,
            as: 'doctorInfo'
        },
        // 根据时间降序查找，最新记录在最上面
        order: [
            ['date','DESC']
        ]
    })

    if (res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'get reg success',
            reg: res
        }
        return
    }
    ctx.status = 400
})


/**修改挂号信息
 * /api/reg/update
 */

router.post('/update', async (ctx,next) =>{
        // 轮班 id
        const id = ctx.request.body.id
        // 查找信息
        const data = await reg.findOne({
            where: {
                id
            }
        })

        const params = ctx.request.body
        const res = data.update(params)

        console.log(params)
        // const res = await data.update(params, t)
        if(res){ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'update reg success'
        }
        return

        } else{
            ctx.status = 400
        }
    })

/** 删除挂号信息
 *  @router POST /api/reg/del
 */

router.post('/del', async ctx =>{
    const res = await reg.destroy({
        where:{
            id: ctx.request.body.id
        }
    })

    if(res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'delete reg success'
        }
        return
    }
    ctx.status = 400
})




router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
  })





  module.exports = router.routes()