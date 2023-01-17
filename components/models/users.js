const db = require('../db')

const createUser = (user)=>{
    const {user, password,token} = user;
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
}