const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');
const Materiel = require('./Materiel');


const ReservationmaterielSchema = new Schema({

    datereservationmateriel:{
        type: Date,
 
    },
    userdatas:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'user'
        },
    materieldata:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Materiel'
    },

    
    } ,{ timestamps: true});

    const Reservationmateriel = mongoose.model('Reservationmateriel', ReservationmaterielSchema);
    module.exports = Reservationmateriel