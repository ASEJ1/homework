const Reservationmateriel = require('../models/Reservationmateriel')
const index =(req, res,next)=>{
    Reservationmateriel.find().populate('user','username').populate('materiel','nom_materiel disponibilite')
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
    let reservatiomaterielID = req.body.reservatiomaterielID
    Reservationmateriel.findById(reservatiomaterielID).populate('user','username').populate('materiel','nom_materiel disponibilite')
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

    let reservatiomateriel= new Reservationmateriel({
        datereservationmateriel:res.body.datereservationmateriel,
        
    })
    Reservationmateriel.save()
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
    let reservatiomaterielID=req.body.reservatiomaterielID
    let updateData={
        datereservationmateriel:res.body.datereservationmateriel,
    }
    reservatiomaterielID.findByIdAndUpdate(reservatiomaterielID, {$set:updateData})
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
    let reservatiomaterielID= req.body.reservatiomaterielID
    Reservationmateriel.findByIdAndRemove(reservatiomaterielID)
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