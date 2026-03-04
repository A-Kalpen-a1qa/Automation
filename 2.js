const prompt = require("prompt-sync")();
let variable = Number(prompt(`Choose the converter you need: 1.Celsius in Fahrenheit 2.Fahrenheit in Celsius 3.Kilometres in Miles 4.Miles in Kilometres 
  \nWrite number witout dote:`));
switch (variable) {
  case 1: {
    let Celsius = prompt("Enter Celsius:");
    let Fahrenheit = Celsius * 1.8 + 32;
    console.log(Fahrenheit + " Fahrenheit");
    break;
  }
  case 2: {
    let Fahrenheit = prompt("Enter Fahrenheit:");
    let Celsius = (Fahrenheit - 32) / 1.8;
    console.log(Celsius + " Celsius");
    break;
  }
  case 3: {
    let Kilometres = prompt("Enter Kilometres:");
    let Miles = Kilometres / 1.6
    console.log(Miles + " Miles");
    break;
  }
  case 4: {
    let Miles = prompt("Enter Miles:");
    let Kilometres = Miles * 1.6
    console.log(Kilometres + " Kilometres");
    break;
  }
  default:
    console.log("Invalid choice");
}

