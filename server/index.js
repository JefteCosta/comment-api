require('dotenv').config()

const app = require('express')();
const consign = require('consign');

const database = require('./src/Config/database');

app.db = database;

  consign()
  .then('./src/Models')
  //.then('./src/Config/passport')
  .then('./src/Config/Middlewares')
  .then('./src/Lib')
  .then('./src/Controllers')
  .then('./src/Schedules')
  .into(app)

  app.listen(80, () => {
    console.log('sistema iniciado com sucesso na porta: ',process.env.HOST_PORT);
    
  })