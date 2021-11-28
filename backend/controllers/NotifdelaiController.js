const Notifdelai = require('../models/Notifdelai')
const index =(req, res,next)=>{
    Notifdelai.find()
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
    let notifdelaiID = req.body.notifdelaiID
    Notifdelai.findById(notifdelaiID).populate('user','username classe')
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

    let notifdelai= new Notifdelai({
        Datenotif:res.body.Datenotif,
        delai:res.body.delai
        
    })
    notifdelai.save()
    .then(response => {
        res.json({
            message:'notification Added Sucessfull!'
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
    let notifdelaiID=req.body.notifdelaiID
    let updateData={
        Datenotif:res.body.Datenotif,
        delai:res.body.delai
    }
    Notifdelai.findByIdAndUpdate(notifdelaiID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'notification updated successfully!'
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
    let notifdelaiID= req.body.notifdelaiID
    Notifdelai.findByIdAndRemove(notifdelaiID)
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