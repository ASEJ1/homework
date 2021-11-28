const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');


const reclamationSchema = new Schema({

    description: {
        type: String,
    },
    userdatas:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'user'
        },

    
    } ,{ timestamps: true});

    const Reclamation = mongoose.model('Reclamation', reclamationSchema);
    module.exports = Reclamation