const Materiel = require('../models/Materiel')
const index=(req, res, next) => 
{
    Materiel.find()
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
    let materielID = req.body.materielID
    Materiel.findById(materielID)
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

    let materiel= new Materiel({
        type:req.body.type,
        nom_materiel:req.body.nom_materiel,
        date_dispo:req.body.date_dispo,
        date_debut:req.body.date_debut,
        date_fin:req.body.date_fin,
        duree:req.body.duree,
        image:req.body.image,
        disponibilite:req.body.disponibilite
    })
    materiel.save()
    .then(response => {
        res.json({
            message:'materiel Added Sucessfull!'
        })
    })
.catch(error => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an mat
const update =(req, res, next)=>
{
    let materielID=req.body.materielID
    let updateData={
        type:req.body.type,
        nom_materiel:req.body.nom_materiel,
        date_dispo:req.body.date_dispo,
        date_debut:req.body.date_debut,
        date_fin:req.body.date_fin,
        duree:req.body.duree,
        image:req.body.image,
        disponibilite:req.body.disponibilite
    }
    Materiel.findByIdAndUpdate(materielID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'materiel updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an materiel

const destory=(req,res,next) =>{
    let materielID= req.body.materielID
    Materiel.findByIdAndRemove(materielID)
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