const moment = require('moment');
module.exports = app => {
    const selectAll = async (params) =>{
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        let dataAtual = dia + '/' + mes + '/' + ano;
        let dataFormat = ano+'-'+mes+'-'+dia
        //console.log(dataAtual);
        let dataInicio = params.dtinicio+' 00:00:01';
        let dataFim = params.dtfim+' 23:59:01';
        if(params.queueSelect == ''){
            return await app.db.select('a.*').from('sys_agents_report_billing as a').leftJoin('sys_user_has_ast_queue as b','a.queue_id','b.queue_id').where('b.user_id',params.userid).whereBetween('a.report_date',[dataInicio, dataFim]).limit(params.limit).offset(params.page * params.limit - params.limit);
        }else{
            let queue = params.queueSelect.split(',')
            return await app.db.select('a.*').from('sys_agents_report_billing as a').leftJoin('sys_user_has_ast_queue as b','a.queue_id','b.queue_id').whereIn('a.queue_number',queue ).where('b.user_id',params.userid).whereBetween('a.report_date',[dataInicio, dataFim]).limit(params.limit).offset(params.page * params.limit - params.limit);
        }
        
    }
    const countLine = async (params) => {
        let data = new Date();
        let dia = String(data.getDate()).padStart(2, '0');
        let mes = String(data.getMonth() + 1).padStart(2, '0');
        let ano = data.getFullYear();
        let dataAtual = dia + '/' + mes + '/' + ano;
        let dataFormat = ano+'-'+mes+'-'+dia
        //console.log(dataAtual);
        let dataInicio = params.dtinicio+' 00:00:01';
        let dataFim = params.dtfim+' 23:59:01';
        return await app.db.from('sys_agents_report_billing as a').leftJoin("sys_user_has_ast_queue as b",'a.queue_id','b.queue_id').where('b.user_id', params.userid).whereBetween('a.report_date',[dataInicio, dataFim]).count('b.id as count').first();

    }
    return {
        selectAll,
        countLine,
    }
}