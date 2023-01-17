const {DataTypes} = require('sequelize')
const {sequelize} =require('../components/db')


exports.User = sequelize.define('users',{
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        token:{
            type: DataTypes.STRING,
        },
    })




/* const db = require('../db')

const createUser = (users)=>{
    const {user, password,token} = users;
    return db.query(
        `INSERT INTO users (username,password,token) VALUES (${user}, ${password} , ${token}) RETURNING *`,
        [user,password,token]
    )
}

const getUser = ()=>{
    return db.query('SELECT * FROM users')
}


module.exports = {
    createUser,
    getUser
} */