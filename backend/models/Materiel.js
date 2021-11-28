const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const chaiseSchema = new Schema({
    type: {
        type: String,
    },
    nom_materiel: {
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
    image:{
        type: String,
    },
    disponibilite:{
        type: Boolean,
    }
  
    },
}, { timestamps: true});

const Materiel = mongoose.model('Materiel', chaiseSchema);

module.exports = Materiel