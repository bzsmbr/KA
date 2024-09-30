let num = 268;
let digitsSum = num.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
let digitsAvg = digitsSum / num.toString().length;

document.getElementById("avgDigits").textContent = "Digit Average: " + digitsAvg;
