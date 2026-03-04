const prompt = require("prompt-sync")();

let name = prompt("Enter name:");
let age = prompt("Enter age:");
let city = prompt("Enter city:");
console.log(name + " (age " + age + ") lives in " + city + ".");
