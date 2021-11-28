const Passagecle = require('../models/Passagecle')
const index =(req, res,next)=>{
    Passagecle.find().populate('user','username')
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
    let passagecleID = req.body.passagecleID
    Passagecle.findById(passagecleID).populate('user','username classe')
    .then(reponse => {
        res.json({
            reponse
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}


const store = (req, res, next) => {

    let passagecle= new Passagecle({
        newemail:res.body.newemail,
        date:res.body.date
        
    })
    Passagecle.save()
    .then(response => {
        res.json({
            message:'passage cle Added Sucessfull!'
        })
    })
.catch(error => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an passage cle
const update =(req, res, next)=>
{
    let passagecleID=req.body.passagecleID
    let updateData={
        newemail:res.body.newemail,
        date:res.body.date
    }
    Passagecle.findByIdAndUpdate(passagecleID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'passage clé updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete a notification

const destory=(req,res,next) =>{
    let passagecleID= req.body.passagecleID
    Passagecle.findByIdAndRemove(passagecleID)
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