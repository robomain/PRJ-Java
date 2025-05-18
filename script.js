const questions = [
  {
    question: "Apa ibu kota Indonesia?",
    choices: ["Bandung", "Surabaya", "Jakarta", "Medan"],
    answer: "Jakarta"
  },
  {
    question: "Siapa presiden pertama Indonesia?",
    choices: ["Soeharto", "Jokowi", "BJ Habibie", "Soekarno"],
    answer: "Soekarno"
  },
  {
    question: "Apa warna bendera Indonesia?",
    choices: ["Merah-Putih", "Merah-Kuning", "Biru-Merah", "Putih-Hijau"],
    answer: "Merah-Putih"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice);
    choicesContainer.appendChild(btn);
  });
}

function checkAnswer(choice) {
  const feedback = document.getElementById("feedback");
  const correct = questions[currentQuestion].answer === choice;
  if (correct) {
    feedback.textContent = "BENAR!";
    score++;
    document.getElementById("score-display").textContent = score;
  } else {
    feedback.textContent = "SALAH!";
  }

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    setTimeout(() => {
      feedback.textContent = "KUIS SELESAI!";
    }, 5000);
  } else {
    setTimeout(() => {
      feedback.textContent = "";
      showQuestion();
    }, 5000);
  }
}

showQuestion();