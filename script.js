const questions = [
  {
    question: "Apa ibu kota Indonesia?",
    answers: [
      { text: "Jakarta", correct: true },
      { text: "Bandung", correct: false },
      { text: "Surabaya", correct: false },
      { text: "Medan", correct: false }
    ]
  },
  {
    question: "2 + 2 = ?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "22", correct: false }
    ]
  },
  {
    question: "Warna primer adalah...",
    answers: [
      { text: "Merah, Kuning, Biru", correct: true },
      { text: "Hijau, Oranye, Ungu", correct: false },
      { text: "Hitam, Putih, Abu", correct: false },
      { text: "Merah, Hijau, Biru", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(button, correct) {
  const buttons = answerButtons.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    const isCorrect = questions[currentQuestionIndex].answers.find(a => a.text === btn.innerText).correct;
    btn.classList.add(isCorrect ? "correct" : "wrong");
  });

  if (correct) score++;
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerText = `Selesai! Skor Anda: ${score} / ${questions.length}`;
  nextButton.innerText = "Ulangi";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}

startQuiz();
