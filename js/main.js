"use strict";
console.log("hello main.js");


let publisher = require("./publish");
publisher.areaGrid();

let db = require("./load");


//AREA BUTTONS
document.getElementById("fantasy-btn").addEventListener("click", fantasy);

document.getElementById("mainSt-btn").addEventListener("click", mainSt);

document.getElementById("adventure-btn").addEventListener("click", adventure);

document.getElementById("frontier-btn").addEventListener("click", frontier);

document.getElementById("liberty-btn").addEventListener("click", liberty);

document.getElementById("cinderalla-btn").addEventListener("click", cinderella);

document.getElementById("tomorrow-btn").addEventListener("click", tomorrow);

document.getElementById("allArea-btn").addEventListener("click", allArea);


//ATTRACTIONS BUTTONS
document.getElementById("rides-btn").addEventListener("click", rides);

document.getElementById("rest-btn").addEventListener("click", rest);

document.getElementById("show-btn").addEventListener("click", show);

document.getElementById("vend-btn").addEventListener("click", vend);

document.getElementById("char-btn").addEventListener("click", char);

document.getElementById("special-btn").addEventListener("click", special);

document.getElementById("game-btn").addEventListener("click", game);

document.getElementById("animals-btn").addEventListener("click", animals);











