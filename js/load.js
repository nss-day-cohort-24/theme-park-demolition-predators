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

//get All areas
function loadAreas() {
        return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            if (this.status === 200) {
                var data = JSON.parse(this.responseText);
                storeAreas(data);
                resolve(data);
            } else {
              var error = xhr.statusText;
                reject(error);
            }
        });
            xhr.open("GET", `https://theme-park-dp.firebaseio.com/areas.json`);
            xhr.send();
    });
}

function getAreas(){
  loadAreas()
    .then(() => {
      return parkAreas;
    })
    .catch(function(error){
      console.log(error);
    });
}

module.exports = {getAreas};
