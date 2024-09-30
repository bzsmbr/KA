let numFactorial = 3;
let resultFactorial = 1;

for (let i = 1; i <= numFactorial; i++) {
    resultFactorial *= i;
}

document.getElementById("factorialResult").textContent = `${numFactorial}! = ${resultFactorial}`;
