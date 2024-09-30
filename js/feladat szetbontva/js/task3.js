let leapYearCheck = 2024;

function leapYearCheckFunction(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

let leapResult = leapYearCheckFunction(leapYearCheck) ? `${leapYearCheck} is a leap year.` : `${leapYearCheck} is not a leap year.`;
document.getElementById("leap").textContent = leapResult;