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