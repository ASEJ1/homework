const ReservationChaise = require('../models/ReservationChaise')
const index =(req, res,next)=>{
    ReservationChaise.find().populate('user','username').populate('chaise','num_chaise disponibilite')
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
    let reservatiochaiseID = req.body.reservationchaiseID
    ReservationChaise.findById(reservatiochaiseID).populate('user','username classe').populate('chaise','num_chaise disponibilite')
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

    let reservatiochaise= new ReservationChaise({
        datereservationchaise:res.body.datereservationchaise,
        
    })
    ReservationChaise.save()
    .then(response => {
        res.json({
            message:'reservation Added Sucessfull!'
        })
    })
.catch(error => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an reservation
const update =(req, res, next)=>
{
    let reservatiochaiseID=req.body.reservatiochaiseID
    let updateData={
        datereservationchaise:res.body.datereservationchaise,
    }
    ReservationChaise.findByIdAndUpdate(reservatiochaiseID, {$set:updateData})
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


//delete a reservation

const destory=(req,res,next) =>{
    let reservatiochaiseID= req.body.reservatiochaiseID
    ReservationChaise.findByIdAndRemove(reservatiochaiseID)
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