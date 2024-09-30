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

