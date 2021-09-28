module.exports = app =>{
  const allUsers = () =>{
    return app.db.select().from('sys_users').timeout(1000);
  }
  const insertUsers = (dados)=>{
    return app.db('sys_users').insert(dados);
  }
  const updateUser = (dados) =>{
    // app.db("usuarios").update(user)
    //   .where({id: user.id})
    return app.db("sys_users").update(dados)
      .where({id: dados.id}).timeout(1000);
  }
  const deleteUser = (dados) =>{
    return app.db("sys_users").where({id: dados.id}).del();
  }
  const VerifyUserForEmail = async (dados) => {
    return await app.db("sys_users").where({email: dados.email}).first();

  }
  const VerifyUserForUsername = async (dados) => {
    return await app.db("sys_users").where({username: dados.username}).first();

  }
  const userForId = async (dados) => {
    return await app.db("sys_users").where({id: dados.id}).timeout(1000);
  }
  const VerifyUserForEmailAuth = async (dados)=>{
    return await app.db("sys_users").where({email: dados.username}).first();
  }
  return{
    allUsers,
    VerifyUserForEmail,
    updateUser,
    insertUsers,
    userForId,
    deleteUser,
    VerifyUserForUsername ,
    VerifyUserForEmailAuth
  }
}