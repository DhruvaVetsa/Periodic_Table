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

router.get('/create-popup/:atomic_no', (req, res, next) => {
    const atomicNumber = req.params.atomic_no;
    const allElementsNames = data.spdf_blk_eles;
    const allDataElements = data.element_data;
    const innerHTMLTxt = `
    <div id="popupContentDiv">
        <span style="text-transform: capitalize;"><span class="property">Name : </span>${allElementsNames[atomicNumber - 1]}</span><br>
        <span class="property">Atomic Mass : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["atomic_mass"]}<br>
        <span class="property">Atomic Number : </span>${atomicNumber}<br>
        <span class="property">Symbol : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["symbol"]}<br>
        <span class="property">Appearence : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["appearance"]}<br>
        <span class="property">Melting Point (K) : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["melt"]}<br>
        <span class="property">Boiling Point (K) : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["boil"]}<br>
        <span class="property">Discovered By : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["discovered_by"]}<br>
        <span class="property">Period Number : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["period"]}<br>
        <span class="property">State of Matter : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["state_of_matter"]}<br>
        <span class="property">Source of Information : </span><a href="${allDataElements[allElementsNames[atomicNumber - 1]]["source"]}" class="sourceATag" target="_blank">${allDataElements[allElementsNames[atomicNumber - 1]]["source"]}</a><br>
        <span class="property">Descrption : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["summary"]}<br>
        <span class="property">Shell Configuration : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["electronicConfigurationNumberOfElectrons"].join()}<br>
        <span class="property">Electronic Configuration : </span>${allDataElements[allElementsNames[atomicNumber - 1]]["condensedElectronicConfiguration"]}<br>
        <span class="property">Extra Notes : </span><textarea id="notesTextarea">${allDataElements[allElementsNames[atomicNumber - 1]]["notes"]}</textarea><br>
    </div>
    <a href="#" title="Go Back to the Periodic Table of Elements!" id="crossButton" onclick="updateNotes(${atomicNumber})">&times;</a>
    `;
});

var changePopupDivInnerHTML = (innerHTML) => {

}

module.exports = router;
