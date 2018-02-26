"use strict";

let searchBar = document.getElementById("txt-search");
let areaDiv = document.getElementById("data-display");

let searchXHRequest = () => { //making XHR function for search bar
    return new Promise((resolve, reject) => { //making promise
        let data = new XMLHttpRequest();//puting the XHR inside a variable named "data"
        data.addEventListener('laod', function() { //adding event listener to parse data upon load
            var themeParkJSON = JSON.parse(this.responseText);//puting parsed data into variable named themeParkJSON
            resolve(themeParkJSON);
        });
        data.addEventListener('error', function() {
            reject();
        });
        data.open('GET',"https://theme-park-dp.firebaseio.com/.json");
        data.send();
    });
};

console.log("data?",searchXHRequest().then);






