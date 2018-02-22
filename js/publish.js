"use strict";
console.log("hello publish.js");
let loader = require("./load");

// let areaKey = loader.jsonArrayObject.areas;

// let mainSt = () =>{
    
// }




let areaGrid = () => {
    let areaDiv = document.getElementById("data-display");
    areaDiv.innerHTML = 
    `<button id="mainSt-btn">Main Street U.S.A</button>
    <button id ="adventure-btn">Adventure Land</button>
    <button id="frontier-btn">Frontier Land</button>
    <button id="liberty-btn">Liberty Square</button>
    <button id="fantasy-btn">Fantasy Land</botton>
    <button id="tomorrow-btn">Tomorrow Land</button>
    <button id="cinderella-btn">Cinderella Castle</button>
    <button id="allArea-btn">All Area</button>`;
};
   





module.exports = {areaGrid};
