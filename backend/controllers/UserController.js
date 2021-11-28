const user = require('../models/user')
const index=(req, res, next) => 
{
    user.find()
    .then(response =>{
        res.json({
        response
         })
    })
 .catch(error=>{
     res.json({
        error
    })
 })   
}

const show = (req, res, next) => {
    let userID = req.body.userID
     user.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}


const store = (req, res, next) => {

    let user= new User({
        username:req.body.username,
        phonenumber:req.body.phonenumber,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        role:req.body.role,
        classe:req.body.classe,


    })
    if(req.file){
        user.image= req.file.path
    }
    user.save()
    .then(response => {
        res.json({
            message:'User Added Sucessfull!'
        })
    })
.catch(error => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an utilisateur
const update =(req, res, next)=>
{
    let userID=req.body.userID
    let updateData={
        username:req.body.username,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        role:req.body.role,
        image:req.body.image,
        classe:req.body.classe
    }
    user.findByIdAndUpdate(userID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'User updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an utilisateur

const destory=(req,res,next) =>{
    let userID= req.body.userID
    user.findByIdAndRemove(userID)
    .then(()=>{
        req.json({
            message: 'an error Occured!'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

module.exports={
    index,show,store,update,destory

}