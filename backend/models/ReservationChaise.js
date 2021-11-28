const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');
const Chaise = require('./Chaise');


const reservationchaiseSchema = new Schema({

    datereservationchaise:{
        type: Date,
 
    },
    userdatas:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'user'
        },
    chaisedata:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Chaise'
    },

    
    } ,{ timestamps: true});

    const ReservationChaise = mongoose.model('ReservationChaise', reservationchaiseSchema);
    module.exports = ReservationChaise