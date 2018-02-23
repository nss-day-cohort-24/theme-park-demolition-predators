"use strict";
console.log("hello publish.js");
let loader = require("./load");

// let areaKey = loader.jsonArrayObject.areas;

// let mainSt = () =>{

// }




let areaGrid = () => {
    let areaDiv = document.getElementById("data-display");
    areaDiv.innerHTML =
    `<div class="row">
     <div id="mainSt-btn" class="col">Main Street U.S.A</div>
     <div id="adventure-btn" class="col">Adventure Land</div>
     </div>

     <div class="row">
     <div id="frontier-btn" class="col">Frontier Land</div>
     <div id="liberty-btn" class="col">Liberty Square</div>
     </div>

     <div class="row">
     <div id="fantasy-btn" class="col">Fantasy Land</div>
     <div id="tomorrow-btn" class="col">Tomorrow Land</div>
     </div>

     <div class="row">
     <div id="cinderella-btn" class="col">Cinderella Castle</div>
     <div id="allArea-btn" class="col">All Areas</div>
     </div>`;
};


module.exports = {areaGrid};
