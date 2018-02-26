"use strict";
console.log("Hello publish.js");

let loader = require("./load");

let areaDiv = document.getElementById("data-display");

function areaGrid(aRay) {
  for(var i = 0; i < aRay.length; i++) {
    let areaName = aRay[i];
    console.log("areaName", areaName);
    areaDiv.innerHTML +=
    `<div id="${areaName}" class="col">${areaName}</div>`;
  }
}

areaGrid(loader.getAreas());

module.exports = {areaGrid};
