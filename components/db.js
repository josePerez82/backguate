//const { Pool } = require('pg')
const { Sequelize } = require('sequelize');
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const database = process.env.DB_DATABASE

const sequelize = new Sequelize(database, user, password,{
  host: host,
  dialect: 'postgres',
})

sequelize.authenticate()
.then(()=>{
  console.log('conexion exitosa')
})
.catch(err => {
  console.log(err)
})

sequelize.sync({force:false})

module.exports={
  sequelize
}
