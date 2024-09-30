let hoursNow = 14, minutesNow = 34, secondsNow = 42;
const secondsInDay = 86400;
let passedSeconds = (hoursNow * 3600) + (minutesNow * 60) + secondsNow;
let leftSeconds = secondsInDay - passedSeconds;

document.getElementById("timeLeft").textContent = "Seconds left today: " + leftSeconds;
