"use strict";

console.log("Hello time.js");
//let loader = require("./loader");

var currentDateTime = new Date();

//var currentTimeString = currentTime.toString();

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var currentMonth = monthNames[currentDateTime.getMonth()];
var currentDate = currentDateTime.getDate();
var currentYear = currentDateTime.getFullYear();
var dateToday = currentMonth + " " + currentDate + ", " + currentYear;

var copyrightDate = '\u00A9' + " " + currentMonth + " " + currentDate + ", " + currentYear;
console.log(copyrightDate);

module.exports = { currentDateTime, dateToday, copyrightDate };

