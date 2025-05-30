let questions = [];
let currentQuestion = 0;
let score = 0;

async function loadQuestions() {
  try {
    const res = await fetch("questions.json");
    questions = await res.json();
    loadQuestion();
  } catch (e) {
    document.getElementById("question").textContent = "Gagal memuat soal!";
    console.error("Error loading questions:", e);
  }
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  document.getElementById("questionImage").src = q.image;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const feedbackBox = document.getElementById("feedbackBox");

  if (selected === correct) {
    score+=10;
    document.getElementById("score").textContent = score;
    feedbackBox.textContent = "BENAR!";
    feedbackBox.style.backgroundColor = "green";
  } else {
    feedbackBox.textContent = "SALAH!";
    feedbackBox.style.backgroundColor = "red";
  }

  feedbackBox.style.display = "block";

  setTimeout(() => {
    feedbackBox.style.display = "none";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("questionBox").style.display = "none";
      document.getElementById("endScreen").style.display = "block";
    }
  }, 5000);
}

loadQuestions();
