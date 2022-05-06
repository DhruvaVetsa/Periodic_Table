const express = require('express');

const router = express.Router();

const data = require('../data/elements');

const notes_db = require('./users');

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



router.get('/', (req, res, next) => {
    res.render('index', {
        elements_data: data.element_data,
        spdf_block_elements: data.spdf_blk_eles,
        spd_data_follower: data.spd_data_follower,
        period_class: element_class_var,
        f_data_follower: data.f_data_follower,
        isPopup: false
    });
});

router.get('/popup', (req, res, next) => {
    res.render('index', {
        elements_data: data.element_data,
        spdf_block_elements: data.spdf_blk_eles,
        spd_data_follower: data.spd_data_follower,
        period_class: element_class_var,
        f_data_follower: data.f_data_follower,
        isPopup: true,
        popup_data: innerHTMLTxt
    })
})

router.get('/create-popup/:atomic_no', (req, res, next) => {
    const atomicNumber = req.params.atomic_no;
    const allElementsNames = data.spdf_blk_eles;
    const allDataElements = data.element_data;
    const element_name = allElementsNames[atomicNumber - 1];
    notes_db.findOne({ element: element_name }, (err, notes) => {
        if (notes != null) {
            notes_db.findOne({ element: element_name }).then((d) => {
                note_var = d.note;
                innerHTMLTxt = `
                <div id="popupContentDiv">
                    <span style="text-transform: capitalize;"><span class="property">Name : </span>${element_name}</span><br>
                    <span class="property">Atomic Mass : </span>${allDataElements[element_name]["atomic_mass"]}<br>
                    <span class="property">Atomic Number : </span>${atomicNumber}<br>
                    <span class="property">Symbol : </span>${allDataElements[element_name]["symbol"]}<br>
                    <span class="property">Appearence : </span>${allDataElements[element_name]["appearance"]}<br>
                    <span class="property">Melting Point (K) : </span>${allDataElements[element_name]["melt"]}<br>
                    <span class="property">Boiling Point (K) : </span>${allDataElements[element_name]["boil"]}<br>
                    <span class="property">Discovered By : </span>${allDataElements[element_name]["discovered_by"]}<br>
                    <span class="property">Period Number : </span>${allDataElements[element_name]["period"]}<br>
                    <span class="property">State of Matter : </span>${allDataElements[element_name]["state_of_matter"]}<br>
                    <span class="property">Source of Information : </span><a href="${allDataElements[element_name]["source"]}" class="sourceATag" target="_blank">${allDataElements[element_name]["source"]}</a><br>
                    <span class="property">Descrption : </span>${allDataElements[element_name]["summary"]}<br>
                    <span class="property">Shell Configuration : </span>${allDataElements[element_name]["electronicConfigurationNumberOfElectrons"].join()}<br>
                    <span class="property">Electronic Configuration : </span>${allDataElements[element_name]["condensedElectronicConfiguration"]}<br>
                    <form action="/update-notes/${element_name}" method="POST">
                        <span class="property">Extra Notes : </span><textarea id="notesTextarea" name="notesTextArea" value="${note_var}">${note_var}</textarea><br>
                        <button title="Go Back to the Periodic Table of Elements!" id="crossButton" type="submit">&times;</button>
                    </form>
                </div>
                `;
                res.redirect('/popup');
            });
        }
        else {
            innerHTMLTxt = `
            <div id="popupContentDiv">
                <span style="text-transform: capitalize;"><span class="property">Name : </span>${element_name}</span><br>
                <span class="property">Atomic Mass : </span>${allDataElements[element_name]["atomic_mass"]}<br>
                <span class="property">Atomic Number : </span>${atomicNumber}<br>
                <span class="property">Symbol : </span>${allDataElements[element_name]["symbol"]}<br>
                <span class="property">Appearence : </span>${allDataElements[element_name]["appearance"]}<br>
                <span class="property">Melting Point (K) : </span>${allDataElements[element_name]["melt"]}<br>
                <span class="property">Boiling Point (K) : </span>${allDataElements[element_name]["boil"]}<br>
                <span class="property">Discovered By : </span>${allDataElements[element_name]["discovered_by"]}<br>
                <span class="property">Period Number : </span>${allDataElements[element_name]["period"]}<br>
                <span class="property">State of Matter : </span>${allDataElements[element_name]["state_of_matter"]}<br>
                <span class="property">Source of Information : </span><a href="${allDataElements[element_name]["source"]}" class="sourceATag" target="_blank">${allDataElements[element_name]["source"]}</a><br>
                <span class="property">Descrption : </span>${allDataElements[element_name]["summary"]}<br>
                <span class="property">Shell Configuration : </span>${allDataElements[element_name]["electronicConfigurationNumberOfElectrons"].join()}<br>
                <span class="property">Electronic Configuration : </span>${allDataElements[element_name]["condensedElectronicConfiguration"]}<br>
                <form action="/update-notes/${element_name}" method="POST">
                    <span class="property">Extra Notes : </span><textarea id="notesTextarea" name="notesTextArea" value="${note_var}">${note_var}</textarea><br>
                    <button title="Go Back to the Periodic Table of Elements!" id="crossButton" type="submit">&times;</button>
                </form>
            </div>
            `;
            res.redirect('/popup');
        }
    });
});

router.post('/update-notes/:element_name', (req, res, next) => {
    var element_name = req.params.element_name;
    var data_to_be_uploaded = {
        element: element_name,
        note: req.body.notesTextArea
    }
    notes_db.findOne({ element: element_name }, (err, notes) => {
        if (notes == null) {
            notes_db.create(data_to_be_uploaded).then((d) => {
                res.redirect('/');
            });
        }
        else {
            notes_db.findOneAndUpdate({ element: element_name }, { "$set": data_to_be_uploaded }, { require: true }).then(completeUData => {
                res.redirect('/');
            })
        }

    })
})

module.exports = router;
