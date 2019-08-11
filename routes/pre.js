/**
 * 处方prescription
 */


const router = require('koa-router')()



// 引入PrescriptionModel实例
const Pre = require('../models/PrescriptionModel')
// 引入PatientModel实例
const Patient = require('../models/PatientModel')
// 引入PretextModel实例
const Pretext = require('../models/PretextModel')
// 引入sequelize操作符
const Op = require('sequelize').Op
// 引入sequelize
const Sequelize = require('sequelize')



// router.prefix('/api/pre')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})


/**显示全部处方信息
 * /api/pre/list
 */
router.get('/list', async ctx => {


    // var pretext = new Object();
    // pretext.text = {}

    //处方的表
    const prescriptions = await Pre.findAll({
        include:{
            model: Patient,
            as: 'patientInfo',
            attributes:['age','sex','phone','address']
        },
    })
    const res = []
    for (var i=0; i<prescriptions.length; i++){
        const drugs = await Pretext.findAll({
            where:{
                preId: prescriptions[i].id
            }
        })
        const prescription = prescriptions[i]
        res.push({
            prescription,
            drugs
        })
    }



    // for(var i=0;i<prescriptions.length;i++){

    //     pretext.text[i] = await Pretext.findAll({
    //         where:{
    //             preId: i
    //         }
    //     })
    // }

    // const drug = pretext.text
    ctx.status = 200
    ctx.body = {
        res
    }
})

/**根据病人姓名查找处方信息
 * /api/pre/namequery
 * 传入参数 patientName
 */
router.get('/namequery', async ctx =>{
    const keyword = ctx.query.patientName

    const res = await Pre.findAll({
        where:{
            "patientName" :{
                [Op.like]: `%${keyword}%`
            }
        },
        include:{
            model: Patient,
            as: 'patientInfo',
            attributes:['name','sex','age','address','phone']
        },
    })

    if (res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'get prescription success',
            datalist: res
        }
        return
    }
    ctx.status = 400
})

/**根据编号查找处方信息
 * /api/pre/idquery
 */
router.get('/iduery', async ctx => {

    const id = ctx.request.body.id

    const res = await Pre.findAll({
        where: {
            id
        }
    })
    if (res){
        ctx.status = 200
        ctx.body = {
            success: true,
            msg: 'get prescription success',
            datalist: res
        }
        return
    }
    ctx.status = 400
})

/**根据处理处方信息
 * /api/pre/deal
 * 传输用户(医生)姓名

router.get('/setSession', async (ctx, next) => {
    try {
        ctx.session.username = ctx.query.name;
        ctx.body = {status: 200, msg: 'session设置成功'};
    } catch (e) {
        ctx.body = {status: 200, msg: 'session设置失败', err: e};
    }
});
router.post('/deal', async ctx => {

    const auditor = ctx.session.username
    const res = await Pre.create({
        auditor
    })

    if (res){
        ctx.body = {
            success: true,
            msg: '保存成功',
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
 */

module.exports = router.routes()