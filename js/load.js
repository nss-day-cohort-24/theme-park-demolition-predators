        "use strict";
        console.log("loading hi load.js");  //testing the file

            var config = {
                apiKey: "AIzaSyDSwR_6ryh4aah9J6XjlzuGTLHRzalW-_o",
                authDomain: "theme-park-dp.firebaseapp.com",
                databaseURL: "https://theme-park-dp.firebaseio.com",

            };

           // // Initialize Firebase
        //   var firebase = require('lib\node_modules\firebase');
            

          //var app=firebase.initializeApp({config});
          //var database = app.database();
          //var databaseRef = database.ref().child('areas');
     
               
    //searching attractions
        function areas(){                                                   //take a method, and url
           return new Promise(function (resolve,reject) {                    //take aresolve and reject
                     var xhr = new XMLHttpRequest();                          //set the xmlhttp
                 xhr.addEventListener('load', function () {                  // load for the following  
                var areas = JSON.parse(this.responseText);
             if (this.status >= 200 && this.status < 300) {                  // Holds the status of the XMLHttpRequest which it means ok 
                resolve(areas);                                              //pass the responce
                   } else {                                                  //otherwise
                       reject({
                         status: this.status,                               //page not found
                         statusText: xhr.statusText                        //           
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
                            
  //searching specific area(by id)

        function getData(id) {                                                   //take a method, and url
            return new Promise(function (resolve, reject) {                    //take aresolve and reject
                var xhr = new XMLHttpRequest();                          //set the xmlhttp
                xhr.addEventListener('load', function () {                  // load for the following  
                    var areas = JSON.parse(this.responseText);
                    if (this.status >= 200 && this.status < 300) {                  // Holds the status of the XMLHttpRequest which it means ok 
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
    getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function (data) {
                (data.forEach((item)=>{
                        alert(item.id);
                });
                console.log("thank you for visiting", data)
            };
            function(data){
                alert("try Again Please");
            });
      
       module.exports=areas;
       //module.exports =areas;
