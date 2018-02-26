"use strict";

let searchBar = document.getElementById("txt-search");
let areaDiv = document.getElementById("data-display");
let searchTerm = "Meet";
let btn = document.getElementById("printSearch");

let searchXHRequest = () => { //making XHR function for search bar
    return new Promise((resolve, reject) => { //making promise
        let data = new XMLHttpRequest();//puting the XHR inside a variable named "data"
        data.addEventListener('load', function() { //adding event listener to parse data upon load
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


function onEnter(){
    searchXHRequest().then( 
        (json) => {
            console.log("json attractions", json.attractions);
            
            let currentSearch;
            areaDiv.innerHTML = "";
            console.log("are you there?");
            
            for (var i = 0; i < json.attractions.length; i++){
                currentSearch = (json.attractions[i].name).toLowerCase();
                let input = searchBar.value.toLowerCase();
                if (currentSearch.includes(input)){
                    //console.log("match", currentSearch);
                    areaDiv.innerHTML += `<div id="attracion-name">${json.attractions[i].name}</div>`;
                }
            }
        },
        (reject) => {
            console.log("SOMETHING WENT REALLY WRONG");
        }
    );
}

searchBar.addEventListener("keypress", function(e) {
    if (e.keyCode == 13){
        onEnter();
    }
});

//onEnter();

module.exports = {onEnter, searchXHRequest};
