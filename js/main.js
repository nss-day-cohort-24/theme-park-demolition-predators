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

var dataDisplay = document.getElementById("data-display");

// Make data-display div contents clickable
function whoClickd(event) {
    console.log("whoClickd", event.target.getAttribute("id"));
    var currentId = event.target.getAttribute("id");
    if (currentId.toString() === "allArea-btn") {
        console.log("inside if");
        db.areas()
        .then((resolve) => {
            console.log("resolve", resolve);
            dataDisplay.innerHTML = `<div>${resolve}</div>`;
        }, (reject) => {
            console.log("oops, that didn't work");
        });
    } else if (currentId === "Fantasyland") {
        console.log("second if");
    }
}

document.getElementById("data-display").addEventListener("click", whoClickd);

