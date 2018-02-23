"use strict";
console.log("loading hi load.js");  //testing the file

//Search Function for Search Bar by Dan
/* var getValue(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
            }  else if (i == key) {
                objects.push(obj[i]);
            }
    }
    return objects;
} */

/* var results = [];
var entry;
var str = "";

str = str.toUpperCase();

function search(source, str) {
    var results;

    str = str.toUpperCase();
    results = source.filter(function (entry) {
        return entry.str.toUpperCase().indexOf(str) !== -1;
    });
    return results;
} */



//From Million, pull and filter data

var config = {
    apiKey: "AIzaSyDSwR_6ryh4aah9J6XjlzuGTLHRzalW-_o",
    authDomain: "theme-park-dp.firebaseapp.com",
    databaseURL: "https://theme-park-dp.firebaseio.com",
};

let inventory = [];
let dataObject = {};

function fillTheData (data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        console.log("keys", keys);
        data[item].firebaseID = item;
        inventory.push(data[item]);
});
    console.log("inventory after fill:", inventory);
}

function areas() { 
    console.log("areas function");                                                  //take a method, and url
    return new Promise(function (resolve, reject) {                    //take a resolve and reject
        var xhr = new XMLHttpRequest();                          //set the xmlhttp
        xhr.addEventListener('load', function () {                  // load for the following  
            if (this.status === 200) {  
                var areas = JSON.parse(this.responseText);  
                fillTheData(areas);              // Holds the status of the XMLHttpRequest which it means ok
                resolve(inventory);                                              //pass the responce
            } else {                                                  //otherwise
                reject(xhr.statusText);
            }
            
        });
            var x = xhr.open("GET", "https://theme-park-dp.firebaseio.com/areas.json"); //get the data
            xhr.send();
    });
}

//searching specific area(by id)

function getData(id) {                                                   //take a method, and url
    return new Promise(function (resolve, reject) {                    //take a resolve and reject
        var xhr = new XMLHttpRequest();                          //set the xmlhttp
        xhr.addEventListener('load', function () {                  // load for the following  
            if (this.status === 200) {                  // Holds the status of the XMLHttpRequest which it means ok
                var areas = JSON.parse(this.responseText);
                resolve(areas);                                              //pass the responce
            } else {                                                  //otherwise
                reject({
                    status: this.status,                        //
                    statusText: xhr.statusText                  //          
                });
            }
            xhr.onerror = function () {                        //  after it rejected we need to handle it
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            var x = xhr.open("GET", "https://theme-park-dp.firebaseio.com/areas.json"); //get the data
            xhr.send();
        });
    });
}

//for each
getData('GET', 'http://jsonplaceholder.typicode.com/todos')
    .then((data) => {
        data.forEach((item) => {
            console.log(item.id);
        });
    console.log("thank you for visiting", data);
    },
    (reject) => {
        console.log("try Again Please");
    });

module.exports = {areas};
      //module.exports =areas;