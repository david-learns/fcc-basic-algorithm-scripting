'use strict';
/**
 * javascript algorithms from freeCodeCamp's "JavaScript Algorithms and Data
 * Structures" curriculum. Below is the "Basic Algorithm Scripting" course.
 * 
 * 
 */


function convertToF(celsius) {
    return celsius * 9/5 + 32;
}


function reverseString(str) {
    return [...str].reverse().join('');
}


function factorialize(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}


function findLongestWordLength(str) {
    let longestWord = 0;
    str.split(' ').forEach(e => {
        if (e.length > longestWord) {
            longestWord = e.length;
        }
    });
    return longestWord;
}


function largestOfFour(arr) {
    const largeArr = [];
    arr.forEach(outerElement => {
        let largest = outerElement[0];
        outerElement.forEach(innerElement => {
            if (innerElement > largest) {
                largest = innerElement;
            }
        });
        largeArr.push(largest);
    });
    return largeArr;
}


function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
}


function repeatStringNumTimes(str, num) {
    let repeatStr = '';
    for (let i = 0; i < num; i++) {
        repeatStr += str;        
    }
    return repeatStr;
}


function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num).concat('...');
    }
    return str;
}


function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return arr[i];
    }
    return undefined;
}


function booWho(bool) {
    return typeof bool === 'boolean';
}


function titleCase(str) {
    let titleCaseArr = [];
    str.split(' ').forEach(word => {
        const charArr = [...word]
        charArr.forEach((char, i) => {
            if (i === 0 && !char.match(/[A-Z]/) && char.match(/\w/)) {
                charArr[i] = String.fromCodePoint(char.charCodeAt(0) - 32);
            } else if (i > 0 && !char.match(/[a-z]/) && char.match(/\w/)) {
                charArr[i] = String.fromCodePoint(char.charCodeAt(0) + 32);
            }
        });
        titleCaseArr.push(charArr.join(''));
    });
    return titleCaseArr.join(' ');
}


function frankenSplice(arr1, arr2, n) {
    return new Array(...arr2.slice(0, n), ...arr1, ...arr2.slice(n));
}


function bouncer(arr) {
    return arr.filter(e => e);
}


function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        if (num > arr[i - 1] && num < arr[i]) {
            return i;
        } else if (num === arr[i - 1]) {
            return i - 1;
        } else if (i === arr.length - 1 && num > arr[i]) {
            return arr.length;
        }
    }
    return 0;
}


function mutation(arr) {
    for (let i = 0; i < arr[1].length; i++) {
        if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
            return false;
        }
    }
    return true;
}


function chunkArrayInGroups(arr, size) {
    const outer = [];
    let inner = [];

    for (let i = 0; i < arr.length; i++) {
        
        inner.push(arr[i]);
        if ((i + 1) % size === 0 || i === arr.length - 1) {
            outer.push(inner);
            inner = [];
        }
        
    }
    return outer;
}



module.exports = {
    convertToF,
    reverseString,
    factorialize,
    findLongestWordLength,
    largestOfFour,
    confirmEnding,
    repeatStringNumTimes,
    truncateString,
    findElement,
    booWho,
    titleCase,
    frankenSplice,
    bouncer,
    getIndexToIns,
    mutation,
    chunkArrayInGroups
}