/* const {createUser,getUser} = require('../components/models/users'); */
const {User} = require('../models/users')


exports.postUsers = async (req, res) => {
 try{
    const {user,password,token} = req.body
    const newUser = await User.create({
        username:user,
        password:password,
        token:token,
    })
    res.json(newUser) 
   /*  const user = await createUser(req.body)
    res.status(201).json(user.rows[0]) */
 }catch(err){
    res.status(400).json({error: err.message})
 }
      
}
    
//get a modelo users para obtener los datos
exports.getUsers = async(req, res) => {
    try{
        const userAll = User.findAll()
        res.json(userAll)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
