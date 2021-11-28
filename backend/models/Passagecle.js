const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');


const passagecleSchema = new Schema({

    newemail: {
        type: String,
    },
    date:{
        type: Date,
 
    },
    userdatas:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'user'
        },

    
    } ,{ timestamps: true});

    const Passagecle = mongoose.model('Passagecle', passagecleSchema);
    module.exports = Passagecle