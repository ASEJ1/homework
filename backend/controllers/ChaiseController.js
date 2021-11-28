const Chaise = require('../models/Chaise')
const index=(req, res, next) => 
{
    Chaise.find()
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
    let chaiseID = req.body.chaiseID
     Chaise.findById(chaiseID)
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

    let chaise= new Chaise({
        num_chaise:req.body.num_chaise,
        type:req.body.type,
        date_dispo:req.body.date_dispo,
        date_debut:req.body.date_debut,
        date_fin:req.body.date_fin,
        duree:req.body.duree,
        disponibilite:req.body.disponibilite
    })
    chaise.save()
    .then(response => {
        res.json({
            message:'chaise Added Sucessfull!'
        })
    })
.catch(eroor => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an chaise
const update =(req, res, next)=>
{
    let chaiseID=req.body.chaiseID
    let updateData={
        num_chaise:req.body.num_chaise,
        type:req.body.type,
        date_dispo:req.body.date_dispo,
        date_debut:req.body.date_debut,
        date_fin:req.body.date_fin,
        duree:req.body.duree,
        disponibilite:req.body.disponibilite
    }
    Chaise.findByIdAndUpdate(chaiseID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'chaise updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an chair

const destory=(req,res,next) =>{
    let chaiseID= req.body.chaiseID
    Chaise.findByIdAndRemove(chaiseID)
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