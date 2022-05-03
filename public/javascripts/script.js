var notesAllElements = [];

function createPopup(atomicNumber) {
    var popupDivVariable = document.getElementById("popupDiv");
    popupDivVariable.innerHTML = `
      <div id="popupContentDiv">
          <span style="text-transform: capitalize;"><span class="property">Name : </span>${
            allElementsNames[atomicNumber - 1]
          }</span><br>
          <span class="property">Atomic Mass : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]]["atomic_mass"]
          }<br>
          <span class="property">Atomic Number : </span>${atomicNumber}<br>
          <span class="property">Symbol : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]]["symbol"]
          }<br>
          <span class="property">Appearence : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]]["appearance"]
          }<br>
          <span class="property">Melting Point (K) : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]]["melt"]
          }<br>
          <span class="property">Boiling Point (K) : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]]["boil"]
          }<br>
          <span class="property">Discovered By : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]]["discovered_by"]
          }<br>
          <span class="property">Period Number : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]]["period"]
          }<br>
          <span class="property">State of Matter : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]]["state_of_matter"]
          }<br>
          <span class="property">Source of Information : </span><a href="${
            allDataElements[allElementsNames[atomicNumber - 1]]["source"]
          }" class="sourceATag" target="_blank">${
      allDataElements[allElementsNames[atomicNumber - 1]]["source"]
    }</a><br>
          <span class="property">Descrption : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]]["summary"]
          }<br>
          <span class="property">Shell Configuration : </span>${allDataElements[
            allElementsNames[atomicNumber - 1]
          ]["electronicConfigurationNumberOfElectrons"].join()}<br>
          <span class="property">Electronic Configuration : </span>${
            allDataElements[allElementsNames[atomicNumber - 1]][
              "condensedElectronicConfiguration"
            ]
          }<br>
          <span class="property">Extra Notes : </span><textarea id="notesTextarea">${
            allDataElements[allElementsNames[atomicNumber - 1]]["notes"]
          }</textarea><br>
      </div>
      <a href="#" title="Go Back to the Periodic Table of Elements!" id="crossButton" onclick="updateNotes(${atomicNumber})">&times;</a>
      `;
    window.location.replace("#popupDiv");
}

function updateNotes(atomicNumberPara) {
    var element = allElementsNames[atomicNumberPara - 1];
    allDataElements[element]["notes"] = document.getElementById("notesTextarea").value;
}