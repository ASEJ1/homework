const Reclamation = require('../models/Reclamation')
const index =(req, res,next)=>{
    Reclamation.find().populate('user','email')
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
    let reclamationID = req.body.reclamationID
    Reclamation.findById(reclamationID).populate('user','email')
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

    let reclamation= new Reclamation({
        description:res.body.description,
        
    })
    reclamation.save()
    .then(response => {
        res.json({
            message:'recla Added Sucessfull!'
        })
    })
.catch(error => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an not
const update =(req, res, next)=>
{
    let reclamationID=req.body.reclamationID
    let updateData={
        description:res.body.description,
       
    }
    Reclamation.findByIdAndUpdate(reclamationID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'reclamation updated successfully!'
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
    let reclamationID= req.body.reclamationID
    Reclamation.findByIdAndRemove(reclamationID)
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