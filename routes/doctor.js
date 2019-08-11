/**
 * 医生 
 * */


const router = require('koa-router')()

// 引入Doctor实例
const Doctor = require('../models/DoctorModel')
// 引入Shift实例
const Shift = require('../models/ShiftModel')
// 引入Reg实例
const Reg = require('../models/AppointmentModel')
// router.prefix('/api/doctor')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

/**获取医生信息
 * /api/doctor/list
 */
router.get('/list', async ctx => {
    const doctors = await Doctor.findAll()
    ctx.status = 200
    ctx.body = {
        doctors
    }
})


/**增加医生信息
 * /api/doctor/add
 */
router.post('/add', async (ctx, next) => {
    const {name, sex, date, education, major, position, department} = ctx.request.body

    const newDoctorList1 = await Doctor.create({
        name,
        sex,
        date,
        education,
        major,
        position,
        department,
    })
    if(newDoctorList1){
            ctx.body = {
                success: true,
                msg: '保存成功',
                newDoctorList1
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

/**修改医生信息
 * /api/doctor/update
 */

router.post('/update', async (ctx,next) =>{
        // 医生 id
        const id = ctx.request.body.id
        // 查找信息
        const data = await Doctor.findOne({
            where: {
                id
            }
        })

        const params = ctx.request.body
        const res = data.update(params)

        console.log(params)

        if(res){ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'update doctor success',
            res
        }
        return

        } else{
            ctx.status = 400
        }
    })




/**删除医生信息
 * /api/doctor/del
 */
router.post('/del', async (ctx, next) => {
    const d_id = ctx.request.body.id
    const haveShift = await Shift.findAll({
        where: {
            d_id : d_id
        }
    })
    if(haveShift){
        Shift.destroy({
            where: {
                d_id : d_id
            }
        })
    }
    const haveReg = await Reg.findAll({
        where: {
            d_id : d_id
        }
    })
    if(haveReg){
        Reg.destroy({
            where: {
                d_id : d_id
            }
        })
    }
    const newDoctorList2 = await Doctor.destroy({

        where: {
            id: ctx.request.body.id
        }
    })
    if(newDoctorList2){
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

    /**根据医生姓名搜索轮班信息
     * /api/doctor/query
     * 传参数 doctorName 过去，得到信息
     */
router.get('/query', async ctx =>{
    const name = ctx.query.doctorName
    const res = await Doctor.findAll({
        where:{
            name
        }
    })

    if (res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'get doctor success',
            Doctor: res
        }
        return
    }
    ctx.status = 400
})




module.exports = router.routes()