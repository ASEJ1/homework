const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const chaiseSchema = new Schema({
    num_chaise: {
        type: int,
    },
    type: {
        type: String,
    },
    date_dispo: {
        type: Date,
    },
    date_debut: {
        type: Date,
    },
    date_fin: {
        type: Date,
    duree:{
        type: Date,
    },

    disponibilite:{
        type: Boolean
    }
    },
}, { timestamps: true});

const Chaise = mongoose.model('Chaise', chaiseSchema);

module.exports = Chaise