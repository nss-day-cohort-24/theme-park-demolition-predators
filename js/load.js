"use strict";
                    console.log("loading hi million .js");  //testing the file
     
     
                let areas={}; //areas is defining

                // Initialize Firebase url and application key
                function myurl() {
                   return{ 
                        databaseURL: "https://theme-park-dp.firebaseio.com",
                        apiKey: "AIzaSyDSwR_6ryh4aah9J6XjlzuGTLHRzalW-_o"
                  };
                }
                //console.log(myurl);
                
                function getData(){                                    //take a method, and url
                    return new Promise(function (resolve,reject) {     //take aresolve and reject
                        var xhr = new XMLHttpRequest();                 //set the xmlhttp
                        
                    xhr.addEventListener('load', function () {              // load for the following  
                        if (this.status >= 200 && this.status < 300) {      // Holds the status of the XMLHttpRequest which it means ok 
                            // let areas = JSON.parse(data)
                            resolve(areas);                                 //pass the responce
                        } else {                                            //otherwise
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
                            
        
            
            
      
       module.exports=myurl;
