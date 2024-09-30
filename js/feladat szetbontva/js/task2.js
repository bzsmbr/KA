let mass = 81.2, stature = 1.78;
let bmiValue = mass / (stature * stature);
document.getElementById("bmiResult").textContent = "BMI: " + bmiValue.toFixed(2);