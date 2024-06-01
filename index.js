let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let resetEl = document.getElementById("reset-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  countEl.textContent = 0;
  count = 0;
}

function reset() {
  saveEl.textContent = "Lap: ";
  countEl.textContent = 0;
  count = 0;
}
