"use strict";
console.log("Hello load.js");

let parkAreas = ["toast"];

function storeAreas(data) {
    let keys = Object.keys(data);
    // console.log("What do I have now?", keys);
    keys.forEach((item) => {
        let areaName = data[item].name;
        parkAreas.push(areaName);
      });
      // console.log(parkAreas);
}

//get All areas
function getAreas() {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            if (this.status === 200) {
                var areas = JSON.parse(this.responseText);
                // console.log("What do I have?", areas);
                storeAreas(areas);
                resolve(parkAreas);
            } else {
                reject(xhr.statusText);
            }

        });
            xhr.open("GET", `https://theme-park-dp.firebaseio.com/areas.json`);
            xhr.send();
    });
}

function giveAreas(){
  return parkAreas;
}

module.exports = {getAreas, giveAreas};
