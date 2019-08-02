const router = require('koa-router')()

// 引入PatientModel实例
const Patient = require('../models/PatientModel')
// 引入sequelize操作符
const Op = require('sequelize').Op

// router.prefix('/api/doctor')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

/**获取病人列表信息
 * /api/patient/list
 */
router.get('/list', async ctx => {
    const patients = await Patient.findAll()
    ctx.status = 200
    ctx.body = {
        patients
    }
})


/**增加患者信息
 * /api/patient/add
 */
router.post('/add', async (ctx, next) => {
    const {
        id, date, name, age, phone, sex, address, l_name, l_phone, disease,
        history, department, doctor
    } = ctx.request.body

    const newPatientList = await Patient.create({
        id, date, name, age, phone, sex, address, l_name, l_phone, disease,
        history, department, doctor
    })
    if(newPatientList){
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


/**删除患者信息
 * /api/patient/delete
 */
router.post('/del', async (ctx, next) => {
    const newPatientList2 = await Patient.destroy({
        where: {
            id: ctx.request.body.id
        }
    })
    if(newPatientList2){
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
        console.log('error')
        ctx.status = 400
    }
})

/**根据关键字搜索患者信息
 * /api/doctor/query
 * 传参数 keyword 过去，得到信息
 */
router.get('/query', async ctx =>{
    const keyword = ctx.query.keyword

    const res = await Patient.findAll({
        where:{
            [Op.or]:[
            {
                "name" :{
                    [Op.like]: '%' + keyword + '%'
                }
            },
            {
                "doctor" :{
                    [Op.like]: '%' + keyword + '%'
                }
            }

            ]
            
    
        }
    })
    
    if (res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'get patient success',
            Doctor: res
        }
        return
    }
    ctx.status = 400
})



module.exports = router.routes()