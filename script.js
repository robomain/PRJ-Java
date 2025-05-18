const questions = [
  {
    question: "Apa kepanjangan dari BUMN?",
    choices: [
      "Badan Umum Milik Negara",
      "Badan Usaha Milik Negara",
      "Badan Urusan Masyarakat Nasional",
      "Bank Umum Masyarakat Nasional"
    ],
    answer: 1
  },
  {
    question: "Siapa presiden Indonesia pertama?",
    choices: ["Soekarno", "Soeharto", "BJ Habibie", "Jokowi"],
    answer: 0
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.question;
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(index);
    btn.disabled = false;
    choicesDiv.appendChild(btn);
  });
}

function updateScore() {
  document.getElementById('score-display').textContent = score;
}

function checkAnswer(index) {
  const correct = questions[current].answer;
  const feedback = document.getElementById('feedback');

  if (index === correct) {
    feedback.textContent = "Benar!";
    score += 10;
  } else {
    feedback.textContent = "Salah!";
  }

  updateScore();

  // Disable all buttons
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(btn => btn.disabled = true);

  setTimeout(() => {
    feedback.textContent = "";
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      document.getElementById('question').textContent = "Kuis selesai!";
      document.getElementById('choices').innerHTML = `<p style="font-size: 2em;">Skor akhir: ${score}</p>`;
    }
  }, 5000);
}

showQuestion();
updateScore();