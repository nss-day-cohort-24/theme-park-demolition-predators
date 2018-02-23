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

      <div class="col">

        <button id="mainSt-btn" class="btn col-sm">Main Street U.S.A</button>

        <button id ="adventure-btn" class="btn btn-light col-sm">Adventure Land</button>

      </div>

      <div class="col">

        <button id="frontier-btn" class="btn btn-light col-sm">Frontier Land</button>

        <button id="liberty-btn" class="btn btn-light col-sm">Liberty Square</button>

      </div>

      <div class="col">

        <button id="fantasy-btn" class="btn btn-light col-sm">Fantasy Land</button>

        <button id="tomorrow-btn" class="btn btn-light col-sm">Tomorrow Land</button>

      </div>

      <div class="col">

        <button id="cinderella-btn" class="btn btn-light col-sm">Cinderella Castle</button>

        <button id="allArea-btn" class="btn btn-light col-sm">All Area</button></div>`;
};


module.exports = {areaGrid};
