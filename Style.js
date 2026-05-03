// Part 1: Time-based Greeting
let name = prompt("What is your name?");
let hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good morning";
} else if (hour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

alert(greeting + ", " + name + "!");

// Part 2: Age and Days Lived Verification
let birthYear = parseInt(prompt("What is your birth year?"));
let age = 2026 - birthYear;
let daysLived = age * 365;

alert("You have lived for approximately " + daysLived + " days!");

if (age >= 18) {
    alert("You are an adult.");
} else {
    alert("You are a minor.");
}
