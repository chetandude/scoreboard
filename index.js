// Elements
const muScoreEl = document.getElementById("mu-score");
const chScoreEl = document.getElementById("ch-score");
const totalScoreEl = document.getElementById("total-score");
const timerEl = document.getElementById("timer-el");
const historyList = document.getElementById("history-list");

// State
let mu = 0;
let ch = 0;

let history = []; // store saved matches
let seconds = 0;
let timerRunning = false;
let timerId = null;

// Helpers
function updateScores() {
  muScoreEl.textContent = mu;
  chScoreEl.textContent = ch;
  totalScoreEl.textContent = mu + ch;
}

function formatTime(s) {
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function renderHistory() {
  historyList.innerHTML = "";

  if (history.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "No saved matches yet.";
    historyList.appendChild(li);
    return;
  }

  history.forEach((item) => {
    const li = document.createElement("li");

    const left = document.createElement("span");
    left.innerHTML = `<span class="tag">${item.time}</span> • ${item.mu}-${item.ch} (Total: ${item.total})`;

    const right = document.createElement("span");
    right.style.opacity = "0.85";
    right.textContent = item.note;

    li.appendChild(left);
    li.appendChild(right);
    historyList.appendChild(li);
  });
}

// Team actions
function incrementTeam(team) {
  if (team === "mu") mu++;
  if (team === "ch") ch++;
  updateScores();
}

function decrementTeam(team) {
  if (team === "mu" && mu > 0) mu--;
  if (team === "ch" && ch > 0) ch--;
  updateScores();
}

// Timer actions
function toggleTimer() {
  timerRunning = !timerRunning;

  if (timerRunning) {
    timerId = setInterval(() => {
      seconds++;
      timerEl.textContent = formatTime(seconds);
    }, 1000);
  } else {
    clearInterval(timerId);
  }
}

function resetTimer() {
  clearInterval(timerId);
  timerRunning = false;
  seconds = 0;
  timerEl.textContent = "00:00";
}

// Save / Undo / Reset
function saveMatch() {
  const timeNow = new Date().toLocaleString();

  const entry = {
    time: timeNow,
    mu,
    ch,
    total: mu + ch,
    note: `Timer: ${formatTime(seconds)}`
  };

  history.unshift(entry);

  // keep only last 10 to look neat
  if (history.length > 10) history.pop();

  renderHistory();
}

function undoLast() {
  if (history.length > 0) {
    history.shift();
    renderHistory();
  }
}

function resetAll() {
  mu = 0;
  ch = 0;
  updateScores();

  resetTimer();

  history = [];
  renderHistory();
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (key === "u") incrementTeam("mu");
  if (key === "c") incrementTeam("ch");
  if (key === "s") saveMatch();

  // Space = start/pause
  if (e.code === "Space") {
    e.preventDefault();
    toggleTimer();
  }
});

// Init
updateScores();
renderHistory();
timerEl.textContent = "00:00";