let fizzBuzzOutput = '';

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzOutput += 'FizzBuzz, ';
    } else if (i % 3 === 0) {
        fizzBuzzOutput += 'Fizz, ';
    } else if (i % 5 === 0) {
        fizzBuzzOutput += 'Buzz, ';
    } else {
        fizzBuzzOutput += i + ', ';
    }
}

document.getElementById("fizzbuzzResult").textContent = fizzBuzzOutput.slice(0, -2);