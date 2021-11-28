const Ticketmateriel = require('../models/Ticketmateriel')
const index =(req, res,next)=>{
    Ticketmateriel.find()
    .populate('user','username')
    .populate('materiel','nom_materiel  date_dispo date_debut date_fin duree')
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
    let ticketmaterielID = req.body.ticketmaterielID
    Ticketmateriel.findById(ticketmaterielID)
    .populate('user','username')
    .populate('materiel','nom_materiel  date_dispo date_debut date_fin duree')
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

    let ticketmateriel= new Ticketmateriel({
        statemat:res.body.statemat,
        
    })
    Ticketmateriel.save()
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
    let ticketmaterielID=req.body.ticketmaterielID
    let updateData={
        statemat:res.body.statemat,
    }
    Ticketmateriel.findByIdAndUpdate(ticketmaterielID, {$set:updateData})
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
    let ticketmaterielID= req.body.ticketmaterielID
    Ticketmateriel.findByIdAndRemove(ticketmaterielID)
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