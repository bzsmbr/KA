// Task 1: Volume and Surface Area
let length = 10.4, width = 13.5, height = 8.2;
let vol = length * width * height;
let area = 2 * (length * width + width * height + length * height);

document.getElementById("vol").textContent = "Volume: " + vol.toFixed(2);
document.getElementById("area").textContent = "Surface Area: " + area.toFixed(2);

// Task 2: BMI Calculation
let mass = 81.2, stature = 1.78;
let bmiValue = mass / (stature * stature);
document.getElementById("bmiResult").textContent = "BMI: " + bmiValue.toFixed(2);

// Task 3: Leap Year Check
let leapYearCheck = 2024;

function leapYearCheckFunction(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

let leapResult = leapYearCheckFunction(leapYearCheck) ? `${leapYearCheck} is a leap year.` : `${leapYearCheck} is not a leap year.`;
document.getElementById("leap").textContent = leapResult;

// Task 4: Character Loop
let word = 'apple';
let charOutput = '';

for (let i = 0; i < word.length; i++) {
    charOutput += word[i] + '<br>';
}

document.getElementById("charLoop").innerHTML = charOutput;

// Task 5: Average of Digits
let num = 268;
let digitsSum = num.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
let digitsAvg = digitsSum / num.toString().length;

document.getElementById("avgDigits").textContent = "Digit Average: " + digitsAvg;

// Task 6: Print Letters until Non-Letter
let sampleString = 'Szia';
let lettersOnly = '';

for (let char of sampleString) {
    if (/^[a-zA-Z]$/.test(char)) {
        lettersOnly += char + '<br>';
    } else {
        break;
    }
}

document.getElementById("displayLetters").innerHTML = lettersOnly;

// Task 7: Divisors
let startNum = 10;
let divisorsOutput = '';

for (let num = startNum; num <= 30; num++) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) divisors.push(i);
    }
    divisorsOutput += `${num}: ${divisors.join(', ')}<br>`;
}

document.getElementById("factors").innerHTML = divisorsOutput;

// Task 8: Remaining Seconds of the Day
let hoursNow = 14, minutesNow = 34, secondsNow = 42;
const secondsInDay = 86400;
let passedSeconds = (hoursNow * 3600) + (minutesNow * 60) + secondsNow;
let leftSeconds = secondsInDay - passedSeconds;

document.getElementById("timeLeft").textContent = "Seconds left today: " + leftSeconds;

// Task 9: Grade Calculation
let scoreValue = 80;
let grade;

if (scoreValue >= 90) grade = 'A';
else if (scoreValue >= 80) grade = 'B';
else if (scoreValue >= 70) grade = 'C';
else if (scoreValue >= 60) grade = 'D';
else grade = 'F';

document.getElementById("finalGrade").textContent = "Grade: " + grade;

// Task 10: Rock, Paper, Scissors
let choice1 = 1, choice2 = 2;  // 1: Rock, 2: Paper, 3: Scissors
let outcome;

if (choice1 === choice2) outcome = "It's a draw.";
else if ((choice1 === 1 && choice2 === 3) || (choice1 === 2 && choice1 === 1) || (choice1 === 3 && choice2 === 2)) {
    outcome = "Player 1 wins.";
} else {
    outcome = "Player 2 wins.";
}

document.getElementById("gameOutcome").textContent = outcome;

// Task 11: Factorial
let numFactorial = 3;
let resultFactorial = 1;

for (let i = 1; i <= numFactorial; i++) {
    resultFactorial *= i;
}

document.getElementById("factorialResult").textContent = `${numFactorial}! = ${resultFactorial}`;

// Task 12

function drawSquare() {
    let size = parseInt(document.getElementById("sizeInput").value);
    let squareOutput = '';

    if (isNaN(size) || size < 2) {
        document.getElementById("squareOutput").textContent = 'Please enter a valid size (minimum 2).';
        return;
    }

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (row === col || row === 0 || row === size - 1 || col === 0 || col === size - 1) {
                squareOutput += '%';
            } else {
                squareOutput += ' ';
            }
        }
        squareOutput += '\n';
    }

    document.getElementById("squareOutput").textContent = squareOutput;
}


// Task 13: Skipped Multiples of 3
let skipOutput = '';
let skipTimes = 0;
let toSkip = 1;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        skipTimes++;
        if (skipTimes === toSkip) {
            toSkip++;
            continue;
        }
    }
    skipOutput += i + ', ';
}

document.getElementById("numsOutput").textContent = skipOutput.slice(0, -2);

// Task 14: FizzBuzz
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
