const Ticketchaise = require('../models/Ticketchaise')
const index =(req, res,next)=>{
    Ticketchaise.find().populate('user','username').populate('chaise','num_chaise  date_dispo date_debut date_fin duree')
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
    let ticketchaiseID = req.body.ticketchaiseID
    Ticketchaise.findById(ticketchaiseID).populate('user','username').populate('chaise','num_chaise  date_dispo date_debut date_fin duree')
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

    let ticketchaise= new Ticketchaise({
        state:res.body.state,
        
    })
    Ticketchaise.save()
    .then(response => {
        res.json({
            message:'ticket Added Sucessfull!'
        })
    })
.catch(error => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update a ticket
const update =(req, res, next)=>
{
    let ticketchaiseID=req.body.ticketchaiseID
    let updateData={
        state:res.body.state,
    }
    Ticketchaise.findByIdAndUpdate(ticketchaiseID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'ticket updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete a reservation

const destory=(req,res,next) =>{
    let ticketchaiseID= req.body.ticketchaiseID
    Ticketchaise.findByIdAndRemove(ticketchaiseID)
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