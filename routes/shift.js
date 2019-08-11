/**
 * 轮班信息
 */


const router = require('koa-router')()

const Shift = require('../models/ShiftModel')
const Doctor = require('../models/DoctorModel')

// router.prefix('/api/shift')

/**获得所有轮班信息
 *  /api/shift/list
 */
router.get('/list', async ctx => {
    const shifts = await Shift.findAll()
    ctx.status = 200
    ctx.body = {
        shifts
    }
})

/**添加轮班
 *  /api/shift/add
 */
router.post('/add', async (ctx, next) => {
    const { name, date, department, time, sex, phone, text, sign } = ctx.request.body

    const doctor = await Doctor.findOne({
        where:{
            name: name,
            department: department
        },
    })
    const d_id = doctor.id

    const newShiftList = await Shift.create({
        name, date, department, time, sex, phone, text, sign, d_id
    })
    if(newShiftList){
            ctx.body = {
                success: true,
                msg: '保存成功',
                newShiftList
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

/**根据医生姓名搜索轮班信息
 * /api/shift/query
 * 传参数 doctorName 过去，得到信息
 */
router.get('/query', async ctx =>{
    const name = ctx.query.doctorName
    const res = await Shift.findAll({
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
            msg: 'get shift success',
            shifts: res
        }
        return
    }
    else
    {
        ctx.body = {
            success: false,
            msg: 'get shift failed'
        }
        ctx.status = 400
    }
})


/**修改轮班信息
 * /api/shift/update
 */

router.post('/update', async (ctx,next) =>{
        // 轮班 id
        const id = ctx.request.body.id
        // 查找信息
        const data = await Shift.findOne({
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
            msg: 'update shift success'
        }
        return

        } else{
            ctx.body = {
                success: false,
                msg: 'update shift failed'
            }
            ctx.status = 400
        }
    })

/** 删除轮班信息
 *  @router POST /api/shift/del
 */

router.post('/del', async ctx =>{
    const res = await Shift.destroy({
        where:{
            id: ctx.request.body.id
        }
    })

    if(res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'delete shift success'
        }
        return
    }
    ctx.status = 400
})




router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})





module.exports = router.routes()