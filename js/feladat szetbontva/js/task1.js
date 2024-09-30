let length = 10.4, width = 13.5, height = 8.2;
let vol = length * width * height;
let area = 2 * (length * width + width * height + length * height);

document.getElementById("vol").textContent = "Volume: " + vol.toFixed(2);
document.getElementById("area").textContent = "Surface Area: " + area.toFixed(2);
