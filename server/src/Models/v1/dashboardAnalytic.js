module.exports = app => {
    const selectAll = async (params) =>{
        return await app.db.select('a.*').from('sys_dashboard_analytic as a').leftJoin("sys_user_has_ast_queue as b",'a.queue_id','b.queue_id').where('b.user_id',params.userid).limit(params.limit).offset(params.page * params.limit - params.limit);
    }
    const countLine = async (params) =>{
        return await app.db.from('sys_dashboard_analytic as a').leftJoin("sys_user_has_ast_queue as b",'a.queue_id','b.queue_id').where('b.user_id', params.userid).count('b.id as count').first();
    
    }
    return {
        selectAll,
        countLine
    }
}