require('dotenv').config();
const express = require('express');
const sequelize = require('./components/db')
const Port = process.env.PORT
const cors = require('cors');
const user = require('./routes/routes')
require('./models/users.js')

async function main(){
    try{
const app = express();
app.use(cors());
app.use(express.json());
app.use(user)

app.listen(Port, () => console.log('service run on port' + Port))

}catch(err){
    console.log('error en la conexion',err)
}
}

main();