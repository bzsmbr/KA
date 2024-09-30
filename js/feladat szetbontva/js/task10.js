let choice1 = 1, choice2 = 2;  // 1: Rock, 2: Paper, 3: Scissors
let outcome;

if (choice1 === choice2) outcome = "It's a draw.";
else if ((choice1 === 1 && choice2 === 3) || (choice1 === 2 && choice1 === 1) || (choice1 === 3 && choice2 === 2)) {
    outcome = "Player 1 wins.";
} else {
    outcome = "Player 2 wins.";
}

document.getElementById("gameOutcome").textContent = outcome;