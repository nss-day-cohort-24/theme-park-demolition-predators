"use strict";
console.log("hello publish.js");


let showData = (parkData) => {
    let dataDisplay = document.getElementById("data-display");

    parkData.forEach((item) => {
        let dataCard = buildCard(item);
        dataDisplay.innerHTML += dataCard;
    });
};

let buildCard = (item) = 