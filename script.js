const quotes = [
  "Believe in yourself!",
  "You can do it!",
  "Never give up!",
  "Stay positive.",
  "Work hard in silence.",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

