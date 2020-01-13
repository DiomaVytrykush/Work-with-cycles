var firstInput = document.querySelector("#first");
var secondInput = document.querySelector("#second");
var button = document.querySelector("#btn");
var display = document.querySelector("#content");

function countNumbers (numberOne , numberTwo){
    for ( var i = numberOne ; i <= numberTwo ; i++ ) {
        if ( i % 3 == 0 && i % 5 == 0 ) {
            display.innerHTML += "Thirthy five" + "<br>";
        }
        else if ( i % 3 === 0 ) {
            display.innerHTML += "Three" + "<br>";
        }
        else if ( i % 5 === 0 ) {
            display.innerHTML += "Five" + "<br>";
        }
        else {
            display.innerHTML +=  i  + "<br>";
        }
    }
}

function sumbitCount() {

    countNumbers(firstInput.value , secondInput.value)

    return false;
    
}
