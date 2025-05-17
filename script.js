const questions = [
  {
    question: "Apa ibu kota Indonesia?",
    choices: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
    answer: "Jakarta"
  },
  {
    question: "Berapakah hasil dari 3 x 5?",
    choices: ["15", "10", "8", "20"],
    answer: "15"
  },
  {
    question: "Hewan tercepat di darat adalah?",
    choices: ["Singa", "Cheetah", "Kuda", "Kelinci"],
    answer: "Cheetah"
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice";
    btn.onclick = () => {
      if (choice === q.answer) {
        feedbackEl.textContent = "Benar!";
        feedbackEl.style.color = "green";
      } else {
        feedbackEl.textContent = "Salah!";
        feedbackEl.style.color = "red";
      }
    };
    choicesEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Selesai!";
    choicesEl.innerHTML = "";
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
  }
};

loadQuestion();
