module.exports = app =>{

    const save = async (req, res, next)=>{
        res.json({date: new Date(), name:'jefte amorim da costa'})
    }
    const show = async (req, res, next)=>{
        res.json({date: new Date(), name:'jefte amorim da costa'})
    }
    return {show}
}