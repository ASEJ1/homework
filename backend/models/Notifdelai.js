const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');


const notifdelaiSchema = new Schema({

    Datenotif: {
        type: Date,
    },
    delai:{
        type: int,
 
    },
    userdatas:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'user'
        },

    
    } ,{ timestamps: true});

    const Notifdelai = mongoose.model('Notifdelai', notifdelaiSchema);
    module.exports = Notifdelai
