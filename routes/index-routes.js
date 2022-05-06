const express = require('express');

const router = express.Router();

const data = require('../data/elements');

const notes_db = require('./users-routes');

const controller = require('../controller/index-controller');

var note_var;
var innerHTMLTxt;
var element_class_var = [];
var atom_names = require('../data/elements').spdf_blk_eles;
const element_types_data = data.element_types_data;
var aton_nos = []

atom_names.forEach((val, ind) => {
    aton_nos[ind] = ++ind;
    if (element_types_data.actinides.includes(ind)) {
        element_class_var[ind - 1] = "Actinides";
    }
    else if (element_types_data['alkaline-earth'].includes(ind)) {
        element_class_var[ind - 1] = "alkaliEarthMetals"
    }
    else if (element_types_data.alkalis.includes(ind)) {
        element_class_var[ind - 1] = "alkalis"
    }
    else if (element_types_data.noble.includes(ind)) {
        element_class_var[ind - 1] = "nobleGasses"
    }
    else if (element_types_data.lanthanides.includes(ind)) {
        element_class_var[ind - 1] = "Lanthanides"
    }
    else if (element_types_data.metalloids.includes(ind)) {
        element_class_var[ind - 1] = "metalloids"
    }
    else if (element_types_data.halogens.includes(ind)) {
        element_class_var[ind - 1] = "halogens"
    }
    else if (element_types_data.basic.includes(ind)) {
        element_class_var[ind - 1] = "basicmetals"
    }
    else if (element_types_data.transition.includes(ind)) {
        element_class_var[ind - 1] = "transitionMetals"
    }
    else if (element_types_data.nonmetals.includes(ind)) {
        element_class_var[ind - 1] = "reactiveNonMetals"
    }
    else {
        element_class_var[ind - 1] = "unknown"
    }
});



router.get('/', controller.getIndex);
router.get('/popup', controller.getPopup);
router.get('/create-popup/:atomic_no', controller.getCreatePopup);
router.post('/update-notes/:element_name', controller.postUpdateNotes)

module.exports = router;
