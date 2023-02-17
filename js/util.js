(function() {
    "use strict";

// number => $$
    function toUSDollars(number, language = "en", country = "US", currency = "USD") {
        return parseFloat(number).toLocaleString(`${language}-${country}`,
            {style: 'currency', currency: currency}
        );
    }

// makes sure that input is a number. Returns true or false
    const isNumber = input => {
        return (typeof input === "number" && isNaN(input) === false);
    }

// builds a pyramid out of asterisks
    const buildPyramid = rows => {
        let row = "";
        let maxNumSpaces = rows;
        let maxNumStars = 1;
        let pyramid = "";
        for (let i = 0; i < rows; i++) {
            let row = "";
            for (let j = 0; j < maxNumSpaces; j++) {
                row += " ";
            }
            for (let j = 0; j < maxNumStars; j++) {
                row += "* ";
            }
            maxNumSpaces -= 1;
            maxNumStars += 1;
            pyramid += `\n${row}`;
        }
        return pyramid;
    }

// generate random number between two parameters
    function x () {

    }

// generates a random number between 2 values
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



})();