var notesAllElements = [];

function updateNotes(atomicNumberPara) {
    var element = allElementsNames[atomicNumberPara - 1];
    allDataElements[element]["notes"] = document.getElementById("notesTextarea").value;
}