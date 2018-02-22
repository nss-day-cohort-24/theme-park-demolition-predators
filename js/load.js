"use strict";

//Search Function for Search Bar by Dan
//assumes jQuery = $
function search(source, name) {
    var results;

    name = name.toUpperCase();
    results = $.map(source, function (entry) {
        var match = entry.name.toUpperCase().indexOf(name) !== -1;
        return match ? entry : null;
    });
    return results;
}