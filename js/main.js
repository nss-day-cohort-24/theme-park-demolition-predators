"use strict";
console.log("hello main.js");


let publisher = require("./publish");

let db = require("./load");

publisher.areaGrid(); 
console.log("button", document.getElementById("allArea-btn"));




let getAreas = db.areas()
.then((resolve) => {
    console.log("resolve:", resolve);
},
(reject) => {
    console.log("OOPS!");
}

);
//db.areas();

// //AREA BUTTONS
// document.getElementById("fantasy-btn").addEventListener("click", oneArea);

// document.getElementById("mainSt-btn").addEventListener("click", oneArea);

// document.getElementById("adventure-btn").addEventListener("click", oneArea);

// document.getElementById("frontier-btn").addEventListener("click", oneArea);

// document.getElementById("liberty-btn").addEventListener("click", oneArea);

// document.getElementById("cinderalla-btn").addEventListener("click", oneArea);

// document.getElementById("tomorrow-btn").addEventListener("click", oneArea);

/* document.getElementById("allArea-btn").addEventListener("click", getAreas); */

document.getElementById("allArea-btn").addEventListener("click", getAreas);


// //ATTRACTIONS BUTTONS
// document.getElementById("rides-btn").addEventListener("click", rides);

// document.getElementById("rest-btn").addEventListener("click", rest);

// document.getElementById("show-btn").addEventListener("click", show);

// document.getElementById("vend-btn").addEventListener("click", vend);

// document.getElementById("char-btn").addEventListener("click", char);

// document.getElementById("special-btn").addEventListener("click", special);

// document.getElementById("game-btn").addEventListener("click", game);

// document.getElementById("animals-btn").addEventListener("click", animals);

