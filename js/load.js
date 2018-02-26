"use strict";
console.log("Hello load.js");

let parkAreas = [];
let fruit = ["apple", "banana", "orange"];

function storeAreas(data) {
    let keys = Object.keys(data);
    // console.log("What do I have now?", keys);
    keys.forEach((item) => {
        let areaName = data[item].name;
        parkAreas.push(areaName);
      });
}

function getAreas() {
  return parkAreas;
}

//get All areas
let loadAreas = () => {
        new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            if (this.status === 200) {
                var data = JSON.parse(this.responseText);
                storeAreas(data);
            } else {
              var error = xhr.statusText;
              console.log("Something went wrong.", error);
            }
        });
        xhr.open("GET", `https://theme-park-dp.firebaseio.com/areas.json`);
        xhr.send();
        resolve();
    })
    .then(() => {
      console.log(parkAreas);
      return parkAreas;
    });
};





module.exports = {loadAreas};
