"use strict";
console.log("Hello load.js");

let parkAreas = [];
let fruit = ["apple", "banana", "orange"];
let areaDiv = document.getElementById("data-display");

function storeAreas(data) {
    let keys = Object.keys(data);
    console.log("What do I have now?", keys);
    keys.forEach((item) => {
        let areaName = data[item].name;
        parkAreas.push(areaName);
      });
}

function areaGrid(aRay) {
  for(var i = 0; i < aRay.length; i++) {
    let areaName = aRay[i];
    console.log("areaName", areaName);
    areaDiv.innerHTML +=
    `<div id="${areaName}" class="col">${areaName}</div>`;
  }
}

//get All areas
let loadAreas = () => {
        return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            if (this.status === 200) {
                var data = JSON.parse(this.responseText);
                storeAreas(data);
                areaGrid(parkAreas);
            } else {
              var error = xhr.statusText;
              reject(() => {
                console.log("Something went wrong.", error);
              });
            }
        });
        xhr.open("GET", `https://theme-park-dp.firebaseio.com/areas.json`);
        xhr.send();
    });
};

module.exports = {loadAreas};
