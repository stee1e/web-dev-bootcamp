var name = prompt("What is your name?");
var firstLetter = name.slice(0, 1);
var capitalLetter = firstLetter.toUpperCase();
var fullName = name.slice(1);
name = capitalLetter + fullName


var a = "3";
var b = "8";
//var a to 8
//var b to 3

[a, b] = [b, a];

console.log('a is ', a);
console.log('b is ', b);