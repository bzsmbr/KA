let scoreValue = 80;
let grade;

if (scoreValue >= 90) grade = 'A';
else if (scoreValue >= 80) grade = 'B';
else if (scoreValue >= 70) grade = 'C';
else if (scoreValue >= 60) grade = 'D';
else grade = 'F';

document.getElementById("finalGrade").textContent = "Grade: " + grade;
