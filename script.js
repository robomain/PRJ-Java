const questions = [
  {
    question: "Apa ibukota Indonesia?",
    choices: ["Bandung", "Surabaya", "Jakarta", "Medan"],
    answer: 2
  },
  {
    question: "Siapa presiden pertama Indonesia?",
    choices: ["Soeharto", "Jokowi", "BJ Habibie", "Soekarno"],
    answer: 3
  },
  {
    question: "Apa lambang negara Indonesia?",
    choices: ["Merpati", "Elang", "Garuda", "Rajawali"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const feedbackEl = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score-display');

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = '';

  q.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.classList.add('choice-btn');
    btn.onclick = () => handleAnswer(index);
    choicesEl.appendChild(btn);
  });
}

function handleAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    feedbackEl.textContent = "Benar!";
    score += 10;
  } else {
    feedbackEl.textContent = "Salah!";
  }
  scoreDisplay.textContent = score;

  // Tunggu 5 detik lalu ke soal berikutnya
  setTimeout(() => {
    feedbackEl.textContent = "";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionEl.textContent = "Quiz Selesai!";
      choicesEl.innerHTML = "";
    }
  }, 5000);
}

showQuestion();