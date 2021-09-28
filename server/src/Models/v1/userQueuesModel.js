module.exports = app => {
    const usersQueues = () => {
        return app.db.select('a.id','a.user_id','c.name AS user_name', 'c.email', 'b.id AS queue_id', 'b.name AS queue_number', 'b.name_queue AS queue_name')
        .from('sys_user_has_ast_queue AS a')
        .leftJoin('ast_queues AS b', 'a.queue_id','b.id')
        .leftJoin('sys_users AS c', 'a.user_id','c.id');
    }
    const usersQueuesById = (params) => {
        return app.db.select('a.id','a.user_id','c.name AS user_name', 'c.email', 'b.id AS queue_id', 'b.name AS queue_number', 'b.name_queue AS queue_name')
        .from('sys_user_has_ast_queue AS a')
        .leftJoin('ast_queues AS b', 'a.queue_id','b.id')
        .leftJoin('sys_users AS c', 'a.user_id','c.id')
        .where('a.user_id', params.user_id);
    }
    return{
        usersQueues,
        usersQueuesById
    }
}