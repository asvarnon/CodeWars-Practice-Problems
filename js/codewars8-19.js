// (function () {
    "use strict";
    // ~~~~~~~~~~~~~~~~~~~a square of squares~~~~~~~~~~~~~~~~~

var isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))){
        return true;
    }
    return false;
}
//NOTE:   isInteger return a boolean answer.

// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
// }

// const isSquare = n => Number.isInteger(Math.sqrt(n));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Validating PIN code~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function validatePIN (pin) {
    var pinlen = pin.length;
    var isCorrectLength = (pinlen === 4 || pinlen === 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);

    if(isCorrectLength && hasOnlyNumbers){
        return true;
    }
    return false;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Validating PIN code~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// })();