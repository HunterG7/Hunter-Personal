(function() {
    "use strict"

    // Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list,
    // returns the first n elements - signature included of the so seeded sequence. Signature will always contain 3 numbers; n will always
    // be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

    const isNumber = input => {
        return (typeof input === "number" && isNaN(input) === false);
    }
    function tribonacci (signature,n) {
        if (n === 0) {
            return [];
        }
        if (n <= 3) {
            let newArray = [];
            for (let i = 0; i < n; i++) {
                newArray.push(signature[i]);
            }
            return newArray;
        }
        for (let i = 0; i < 3; i++) {
            if (isNumber(signature[i]) === false) {
                return [];
            }
        }
        let index1 = 0;
        let index2 = 1;
        let index3 = 2;
        for (let i = 0; i < n - 3; i++) {
            let sum = signature[index1] + signature[index2] + signature[index3];
            signature.push(sum);
            index1 = index1 + 1;
            index2 = index2 + 1;
            index3 = index3 + 1;
        }
        return signature;
    }

    // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
    // No floats or non-positive integers will be passed. For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

    const sumTwoSmallestNumbers = numbers => {
        let small1 = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < small1) {
                small1 = numbers[i];
            }
        }
        let indexSmall1 = numbers.indexOf(small1);
        numbers.splice(indexSmall1, 1);
        let small2 = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < small2) {
                small2 = numbers[i];
            }
        }
        return small1 + small2;
    }
    sumTwoSmallestNumbers([4, 2, 5, 3]);

    // Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y).
    // The input string will only consist of lower case letters and/or spaces.
    function getCount(str) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;
        let strArray = str.toLowerCase().split("");
        for (let i = 0; i < strArray.length; i++) {
            let char = strArray[i];
            for (let j = 0; j < 5; j++) {
                if (char === vowels[j]) {
                    count += 1;
                }
            }
        }
        return count;
    }
    // console.log(getCount("aaa  b e"));

    // Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
    // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input
    // String will only contain valid consecutive numbers.

    function order (words) {
        if (words === "") {
            return words;
        }
        let result = [];
        let wordsArray = words.split(" ");
        for (let i = 1; i < 10; i++) {
            for (let j = 0; j < wordsArray.length; j++) {
                let currentWord = wordsArray[j];
                if (currentWord.includes(i)) {
                    result.push(currentWord);
                }
            }
        }
        return result.join(" ");
    }
    console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

    // can u make a triangle out of the given lengths
    function isTriangle (a, b, c) {
        return ((a + b) > c && (a + c) > b && (b + c) > a)
    }

    // Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result. It should remove all
    // values from list a, which are present in list b keeping their order. arrayDiff([1,2],[1]) == [2]
    // If a value is present in b, all of its occurrences must be removed from the other: arrayDiff([1,2,2,2,3],[2]) == [1,3]
    const arrayDiff = (a, b) => {
        for (let i = 0; i < b.length; i++) {
            for (let j = 0; j < a.length; j++) {
                if (b[i] === a[j]) {
                    a.splice(j, 1);
                }
            }
        }
        return a;
    }
    console.log(arrayDiff([1,2,2,3], [2]));
    //failure so far

    // get middle character(s) from string
    function getMiddle(s) {
        let sArray = s.split(""),
            length = sArray.length,
            mid1Index = "",
            mid2Index = "";
        if (length % 2 === 0) {
            mid1Index = (length / 2) - 1;
            mid2Index = (length / 2);
            return sArray[mid1Index].toString() + sArray[mid2Index].toString();
        } else {
            mid1Index = (length - 1) / 2;
            return sArray[mid1Index].toString();
        }
    }

    console.log(getMiddle("stares"));

    // does one string end with the other string
    function solution (str, ending) {
        let strArr                                                                                                                                                                                                                                                                                                                                                                                    ay = str.split(""),
            endingArray = ending.split(""),
            j = 1;
        // console.log(strArray, endingArray);
        for (let i = 0; i < endingArray.length; i++) {
            if(!(strArray[strArray.length - j] === endingArray[endingArray.length - j])) {
                return false;
            }
            // console.log(j);
            // console.log((strArray[strArray.length - j] === endingArray[endingArray.length - j]))
            j++;
        }
        return true;
    }
    console.log(solution("story", "ory"));

    // create a sub matrix
    function constructSubmatrix (matrix, rowsToDelete, columnsToDelete) {
        let numRows = matrix.length;

    }


})()