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
function whoClickd(event) {                             //creates whoClickd function and passes in event
    var currentId = event.target.getAttribute("id");    //sets clicked target to currentId
    if (currentId.toString() === "allArea-btn") {
        db.areas()
        .then((resolve) => {
            dataDisplay.innerHTML = `<div>${resolve}</div>`;
        }, (reject) => {
            console.log("oops, that didn't work");
        });
    }   else if (currentId.toString() === "adventure-btn") {
        db.areas()
        .then((resolve) => {
            dataDisplay.innerHTML = `<div>${resolve}</div>`;
        }, (reject) => {
            console.log("oops, that didn't work");
        });
    }   else if (currentId.toString() === "cinderella-btn") {
        db.areas()
        .then((resolve) => {
            dataDisplay.innerHTML = `<div>${resolve}</div>`;
        }, (reject) => {
            console.log("oops, that didn't work");
        });
    }   else if (currentId.toString() === "fantasy-btn") {
        db.areas()
        .then((resolve) => {
            dataDisplay.innerHTML = `<div>${resolve}</div>`;
        }, (reject) => {
            console.log("oops, that didn't work");
        });
    }   else if (currentId.toString() === "frontier-btn") {
        db.areas()
        .then((resolve) => {
            dataDisplay.innerHTML = `<div>${resolve}</div>`;
        }, (reject) => {
            console.log("oops, that didn't work");
        });
    }   else if (currentId.toString() === "liberty-btn") {
        db.areas()
        .then((resolve) => {
            dataDisplay.innerHTML = `<div>${resolve}</div>`;
        }, (reject) => {
            console.log("oops, that didn't work");
        });
    }   else if (currentId.toString() === "mainSt-btn") {
        db.areas()
        .then((resolve) => {
            dataDisplay.innerHTML = `<div>${resolve}</div>`;
        }, (reject) => {
            console.log("oops, that didn't work");
        });
    }   else if (currentId.toString() === "tomorrow-btn") {
        db.areas()
        .then((resolve) => {
            dataDisplay.innerHTML = `<div>${resolve}</div>`;
        }, (reject) => {
            console.log("oops, that didn't work");
        });
        
}
}


document.getElementById("data-display").addEventListener("click", whoClickd);

