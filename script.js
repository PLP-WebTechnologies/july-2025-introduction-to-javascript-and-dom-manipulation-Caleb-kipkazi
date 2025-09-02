// ======================
// Part 1: Basics
// ======================
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are eligible!";
  } else if (age > 0) {
    result.textContent = "❌ You are too young!";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
}

// ======================
// Part 2: Functions
// ======================

// Function to calculate sum
function addNumbers(a, b) {
  return a + b;
}

// Function to show result in DOM
function showSum() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let sum = addNumbers(num1, num2);

  document.getElementById("sumResult").textContent = "Sum: " + sum;
}

// ======================
// Part 3: Loops
// ======================

function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old items

  // Using for loop
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  // After loop
  let done = document.createElement("li");
  done.textContent = "🚀 Blast off!";
  list.appendChild(done);
}

// ======================
// Part 4: DOM Manipulation
// ======================

const toggleBtn = document.getElementById("toggleBtn");
const toggleMessage = document.getElementById("toggleMessage");

// Toggle message visibility
toggleBtn.addEventListener("click", () => {
  toggleMessage.classList.toggle("hidden");
});

// Dynamically add items to a list
function addListItem() {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New item " + (list.children.length + 1);
  list.appendChild(li);
}
