/**
 * 挂号信息 */


const router = require('koa-router')()


const Reg = require('../models/AppointmentModel')
const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')

// 引入sequelize操作符
const Op = require('sequelize').Op
// 引入sequelize
const Sequelize = require('sequelize')

// router.prefix('/api/reg')

/** 
 * 新增挂号办理
 * /api/reg/add
 */

router.post('/add', async (ctx, next) => {
    const { p_name, d_name,  department,time } = ctx.request.body

    const patient = await Patient.findOne({
        where:{
            name: p_name
        },
    })

    const doctor = await Doctor.findOne({
        where:{
            name: d_name,
            department: department
        },
    })

    const p_id = patient.id
    const d_id = doctor.id
    const position = doctor.position
    var expenses = 0.00
    if(position === '主治医师'){
        expenses = 10.00
    }
    else if(position === '副主任医师'){
        expenses = 20.00
    }
    else if(position === '主任医师'){
        expenses = 30.00
    }

    const line = await Reg.count({
        where: {
            d_id
        }
    })

    

    const newRegList = await Reg.create({
        p_id,
        p_name,
        d_id,
        d_name,
        department,
        line,
        expenses,
        time
    })
    if(newRegList){
            ctx.body = {
                success: true,
                msg: '保存成功',
                newRegList
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

  /**根据患者姓名搜索挂号信息
   * /api/reg/query
   * 传参数 patientName 过去，得到信息
   */
router.get('/query', async ctx =>{
    const patientName = ctx.query.patientName
    const res = await Reg.findAll({
        where:{
            p_name :{
                [Op.like]: '%' + patientName + '%'
            }
        },
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

/** 已经挂号的资料
 * /api/reg/datalist
 * 传参数 doctorName 过去，得到信息
 */
router.get('/datalist', async ctx =>{

    const res = await Reg.findAll({

        attributes:['id','time'],
        include:{
            model: Patient,
            as: 'patientInfo',
            attributes:['name','age','phone','disease','department']
        },
    })

    if (res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'get datalist success',
            shift: res
        }
        return
    }
    ctx.status = 400
})

/**根据患者姓名搜索已经挂号信息信息
 * /api/reg/dataquery
 */
router.get('/dataquery', async ctx =>{
    const keyword = ctx.query.patientName

    const res = await Reg.findAll({
        where:{
            "p_name" :{
                [Op.like]: `%${keyword}%`
            }   
        },
        attributes:['id','time'],
        include:{
            model: Patient,
            as: 'patientInfo',
            attributes:['name','age','phone','disease','department']
        },
    })
    
    if (res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'success',
            datalist: res
        }
        return
    }
    ctx.status = 400
})


router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
  })





  module.exports = router.routes()