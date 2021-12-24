'use strict';
/**
 * jest test on freeCodeCamp's "Basic Algorithm Scripting" problems using the
 * (at the time) on-screen challenge test suite.
 * 
 * david-learned: tests take a lot of time to build, and, i dare say with
 * little experience, are somewhat tedious. it is best to create them when
 * building the unit.
 * 
 * 
 */
const basic = require('./basic-scripting');
const { describe, expect, test } = require('@jest/globals');


test('convertToF: converts celsius to fahrenheit', () => {
    expect(typeof basic.convertToF(0)).toBe('number');
    expect(basic.convertToF(0)).toBe(32);
    expect(basic.convertToF(-30)).toBe(-22);
    expect(basic.convertToF(-10)).toBe(14);
    expect(basic.convertToF(20)).toBe(68);
    expect(basic.convertToF(30)).toBe(86);
});


test('reverseString: reverses string', () => {
    expect(typeof basic.reverseString('hello')).toBe('string');
    expect(basic.reverseString('hello')).toBe('olleh');
    expect(basic.reverseString('Howdy')).toBe('ydwoH');
    expect(basic.reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
});


test('factorialize: find the factorial of num', () => {
    expect(typeof basic.factorialize(5)).toBe('number');
    expect(basic.factorialize(5)).toBe(120);
    expect(basic.factorialize(10)).toBe(3628800);
    expect(basic.factorialize(20)).toBe(2432902008176640000);
    expect(basic.factorialize(0)).toBe(1);
});


test('findLongestWordLength: find the length of the longest word in a sentence', () => {
    expect(typeof basic.findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe('number');
    expect(basic.findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(6);
    expect(basic.findLongestWordLength('May the force be with you')).toBe(5);
    expect(basic.findLongestWordLength('Google do a barrel roll')).toBe(6);
    expect(basic.findLongestWordLength('What is the average airspeed velocity of an unladen swallow')).toBe(8);
    expect(basic.findLongestWordLength('What if we try a super-long word such as otorhinolaryngology')).toBe(19);
});


test('largestOfFour: find the largest number in each subarray (2d array)', () => {
    expect(Array.isArray(basic.largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))).toBe(true);
    expect(basic.largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toStrictEqual([27, 5, 39, 1001]);
    expect(basic.largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).toStrictEqual([9, 35, 97, 1000000]);
    expect(basic.largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])).toStrictEqual([25, 48, 21, -3]);
});


test('confirmEnding: confirm the ending of a string contains the target', () => {
    expect(basic.confirmEnding.toString().includes('.endsWith(')).toBe(false);
    expect(basic.confirmEnding('Bastian', 'n')).toBe(true);
    expect(basic.confirmEnding('Congratulation', 'on')).toBe(true);
    expect(basic.confirmEnding('Conner', 'n')).toBe(false);
    expect(basic.confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification')).toBe(false);
    expect(basic.confirmEnding('He has to give me a new name', 'name')).toBe(true);
    expect(basic.confirmEnding('Open sesame', 'same')).toBe(true);
    expect(basic.confirmEnding('Open sesame', 'sage')).toBe(false);
    expect(basic.confirmEnding('Open sesame', 'game')).toBe(false);
    expect(basic.confirmEnding('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain')).toBe(false);
    expect(basic.confirmEnding('Abstraction', 'action')).toBe(true);
});


test('repeatStringNumTimes: repeat a string num times', () => {
    expect(basic.repeatStringNumTimes.toString().includes('.repeat(')).toBe(false);
    expect(basic.repeatStringNumTimes('*', '3')).toBe('***');
    expect(basic.repeatStringNumTimes('abc', '3')).toBe('abcabcabc');
    expect(basic.repeatStringNumTimes('abc', '4')).toBe('abcabcabcabc');
    expect(basic.repeatStringNumTimes('abc', '1')).toBe('abc');
    expect(basic.repeatStringNumTimes('*', '8')).toBe('********');
    expect(basic.repeatStringNumTimes('abc', '-2')).toBe('');
    expect(basic.repeatStringNumTimes('abc', '0')).toBe('');
});


test('truncateString: truncate a string to num characters', () => {
    expect(basic.truncateString('A-tisket a-tasket A green and yellow basket', 8)).toBe('A-tisket...');
    expect(basic.truncateString('Peter Piper picked a peck of pickled peppers', 11)).toBe('Peter Piper...');
    expect(basic.truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)).toBe('A-tisket a-tasket A green and yellow basket');
    expect(basic.truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2)).toBe('A-tisket a-tasket A green and yellow basket');
    expect(basic.truncateString('A-', 1)).toBe('A...');
    expect(basic.truncateString('Absolutely Longer', 2)).toBe('Ab...');
});


test('findElement: find first element where func(element) evaluates true', () => {
    expect(basic.findElement([1, 2, 3, 4], num => num % 2 === 0)).toBe(2);
    expect(basic.findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).toBe(8);
    expect(basic.findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })).toBeUndefined();
});


test('booWho: return argument\'s booleanness', () => {
    expect(basic.booWho(true)).toBe(true);
    expect(basic.booWho(false)).toBe(true);
    expect(basic.booWho([1,2,3])).toBe(false);
    expect(basic.booWho([].slice)).toBe(false);
    expect(basic.booWho({ "a": 1 })).toBe(false);
    expect(basic.booWho(1)).toBe(false);
    expect(basic.booWho(NaN)).toBe(false);
    expect(basic.booWho('a')).toBe(false);
    expect(basic.booWho('true')).toBe(false);
    expect(basic.booWho('false')).toBe(false);
});


test('titleCase: format string in title case', () => {
    expect(typeof basic.titleCase('')).toBe('string');
    expect(basic.titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
    expect(basic.titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
    expect(basic.titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe("Here Is My Handle Here Is My Spout");
});


test('frankenSplice: insert array (arg 2) in array (1st arg) at index (3rd arg)', () => {
    const arr1 = [1, 2, 3];
    const test1 = Array.from(arr1);
    const arr2 = [4, 5];
    const test2 = Array.from(arr2);
    expect(basic.frankenSplice(arr1, arr2, 1)).toStrictEqual([4, 1, 2, 3, 5]);
    expect(arr1).toStrictEqual(test1);
    expect(arr2).toStrictEqual(test2);

    expect(basic.frankenSplice([1, 2], ["a", "b"], 1)).toStrictEqual(["a", 1, 2, "b"]);
    expect(basic.frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)).toStrictEqual(["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
    expect(basic.frankenSplice([1, 2, 3, 4], [], 0)).toStrictEqual([1, 2, 3, 4]);
});


test('bouncer: filter out only truthy elements in array', () => {
    expect(basic.bouncer([7, "ate", "", false, 9])).toStrictEqual([7, "ate", 9]);
    expect(basic.bouncer(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    expect(basic.bouncer([false, null, 0, NaN, undefined, ""])).toStrictEqual([]);
    expect(basic.bouncer([null, NaN, 1, 2, undefined])).toStrictEqual([1, 2]);
});


test('getIndexToIns: return the index in array where the number to be inserted is in ascending order', () => {
    expect(typeof basic.getIndexToIns([10, 20, 30, 40, 50], 35)).toBe('number');
    expect(basic.getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
    expect(basic.getIndexToIns([10, 20, 30, 40, 50], 30)).toBe(2);
    expect(basic.getIndexToIns([40, 60], 50)).toBe(1);
    expect(basic.getIndexToIns([3, 10, 5], 3)).toBe(0);
    expect(basic.getIndexToIns([5, 3, 20, 3], 5)).toBe(2);
    expect(basic.getIndexToIns([2, 20, 10], 19)).toBe(2);
    expect(basic.getIndexToIns([2, 5, 10], 15)).toBe(3);
    expect(basic.getIndexToIns([], 1)).toBe(0);
});


test('mutation: test whether each char in 2nd element is in 1st element', () => {
    expect(basic.mutation(["hello", "hey"])).toBe(false);
    expect(basic.mutation(["hello", "Hello"])).toBe(true);
    expect(basic.mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
    expect(basic.mutation(["Mary", "Army"])).toBe(true);
    expect(basic.mutation(["Mary", "Aarmy"])).toBe(true);
    expect(basic.mutation(["Alien", "line"])).toBe(true);
    expect(basic.mutation(["floor", "for"])).toBe(true);
    expect(basic.mutation(["hello", "neo"])).toBe(false);
    expect(basic.mutation(["voodoo", "no"])).toBe(false);
    expect(basic.mutation(["ate", "date"])).toBe(false);
    expect(basic.mutation(["Tiger", "Zebra"])).toBe(false);
    expect(basic.mutation(["Noel", "Ole"])).toBe(true);
});


test('chunkArrayInGroups: split array into subarrays of length 2nd arg', () => {
    expect(basic.chunkArrayInGroups(["a", "b", "c", "d"], 2)).toStrictEqual([["a", "b"], ["c", "d"]]);
    expect(basic.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toStrictEqual([[0, 1, 2], [3, 4, 5]]);
    expect(basic.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toStrictEqual([[0, 1], [2, 3], [4, 5]]);
    expect(basic.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toStrictEqual([[0, 1, 2, 3], [4, 5]]);
    expect(basic.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toStrictEqual([[0, 1, 2], [3, 4, 5], [6]]);
    expect(basic.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
    expect(basic.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toStrictEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
});