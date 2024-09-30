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
