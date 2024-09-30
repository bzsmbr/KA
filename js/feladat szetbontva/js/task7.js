let startNum = 10;
let divisorsOutput = '';

for (let num = startNum; num <= 30; num++) {
    let divisors = [];
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) divisors.push(i);
    }
    divisorsOutput += `${num}: ${divisors.join(', ')}<br>`;
}

document.getElementById("factors").innerHTML = divisorsOutput;