"use strict";
// name: Dajah Medina
// date: 8-13-19

function removeSelectDefaults(){
    var emptyBoxes=
    document.getElementsByTagName("select");
    alert("select list:" + emptyBoxes.length);
}

function createEventListener(){
    var submitButton = document.getElementById("submit");
    if (submitButton.addEventListener){
        submitButton.addEventListener("click",
        removeSelectDefaults,false);    }
        else if (submitButton.attachEvent){
            submitButton.attachEvent("onclick", removeSelectDefaults);
        }
}
