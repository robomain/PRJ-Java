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

function showQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.question;
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(index);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(index) {
  const correct = questions[current].answer;
  alert(index === correct ? "Benar!" : "Salah!");
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById('question').textContent = "Kuis selesai!";
    document.getElementById('choices').innerHTML = "";
  }
}

showQuestion();