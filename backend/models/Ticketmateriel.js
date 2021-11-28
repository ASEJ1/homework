const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');
const Materiel = require('./Materiel');


const ticketmaterielSchema = new Schema({

    statemat:{
        type: String,
 
    },
    userdatas:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'user'
        },
    materieldata:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'materiel'
    },

    
    } ,{ timestamps: true});

    const Ticketmateriel = mongoose.model('Ticketmateriel', ticketmaterielSchema);
    module.exports = Ticketmateriel