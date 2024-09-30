let word = 'apple';
let charOutput = '';

for (let i = 0; i < word.length; i++) {
    charOutput += word[i] + '<br>';
}

document.getElementById("charLoop").innerHTML = charOutput;