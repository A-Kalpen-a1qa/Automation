const prompt = require("prompt-sync")();
let score = Number(prompt("Write your score(0-100): "))
if (score <= 100 && score >= 90){
    console.log("A");
}
else if(score >= 80){
    console.log("B");
}
else if(score >= 70){
    console.log("C");
}
else if(score >= 60){
    console.log("D");
}
else if(score >= 0){
    console.log("F");
}
else {
    console.log("Invalid score");
}
