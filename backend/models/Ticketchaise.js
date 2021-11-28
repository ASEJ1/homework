const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');
const Chaise = require('./Chaise');


const ticketchaiseSchema = new Schema({

    state:{
        type: String,
 
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

    const Ticketchaise = mongoose.model('Ticketchaise', ticketchaiseSchema);
    module.exports = Ticketchaise