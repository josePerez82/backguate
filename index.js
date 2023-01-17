require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const Port = process.env.PORT
const cors = require('cors');
const user = require('./routes/routes')


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())


app.use(user)


app.listen(Port, () => console.log('service run on port' + Port))