const {createUser,getUser} = require('../components/models/users');

exports.postUsers = async (req, res) => {
 try{
    const user = await createUser(req.body)
    res.status(201).json(user.rows[0])
 }catch(err){
    res.status(400).json({error: err.message})
 }
      
}
    //
//get a modelo users para obtener los datos
exports.getUsers = async(req, res) => {
    try{
        const users = await getUser()
        res.json(users.rows)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
