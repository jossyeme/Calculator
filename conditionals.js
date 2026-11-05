// 1. Basic if/else — check if a number is positive, negative, or zero
let num = -5;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2. Ternary operator — compact if/else for a single value
let age = 20;
let canVote = age >= 18 ? "Can vote" : "Cannot vote";
console.log(canVote);

// 3. Logical AND (&&) — run code only if multiple conditions are true
let isLoggedIn = true;
let isAdmin = true;
if (isLoggedIn && isAdmin) {
  console.log("Welcome, admin!");
}

// 4. Logical OR (||) with nullish fallback — default values
let username = null;
let displayName = username || "Guest";
console.log(displayName);



// 5. Basic switch — map a grade letter to a message
let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("You passed.");
    break;
  default:
    console.log("Invalid grade.");
}

// 6. Switch 
let operator = "*";
let a = 10, b = 5, result;
switch (operator) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = b !== 0 ? a / b : "Error: divide by zero";
    break;
  default:
    result = "Unknown operator";
}
console.log(result);

// 7. Switch with true — lets you use conditions instead of exact values
let score = 85;
switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  default:
    console.log("F");
}

// 5. Switch returning a value from a function
function getDayName(dayNum) {
  switch (dayNum) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Invalid day";
  }
}
console.log(getDayName(3)); // "Wednesday"