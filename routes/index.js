const express = require('express');

const router = express.Router();

const data = require('../data/elements');

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



router.get('/', (req, res, next) => {
  res.render('index', {
    elements_data : data.element_data,
    spdf_block_elements : data.spdf_blk_eles,
    spd_data_follower : data.spd_data_follower,
    period_class : element_class_var,
    f_data_follower : data.f_data_follower
  });
});

module.exports = router;
