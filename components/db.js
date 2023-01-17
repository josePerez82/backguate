const { Pool } = require('pg')

const pool = new Pool({
  user: 'guatem',
  host: 'dpg-cf2t5mha6gdpa6r7se8g-a',
  database: 'guate',
  password: 'sMKLZVRz3GW0qA5P0iUbOfPeAvByNAob',
  port: 5432,
})

module.exports = {
  query:(text,params)=>pool.query(text,params)
}