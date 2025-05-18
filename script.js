const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    question: "2 + 2 = ?",
    choices: ["3", "4", "5", "22"],
    answer: "4"
  },
  {
    question: "Which one is a programming language?",
    choices: ["HTML", "CSS", "Python", "Wi-Fi"],
    answer: "Python"
  }
];

let current = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice-btn";
    btn.onclick = () => {
      if (choice === q.answer) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "lightgreen";
      } else {
        feedbackEl.textContent = "Wrong!";
        feedbackEl.style.color = "salmon";
      }

      setTimeout(() => {
        current = (current + 1) % questions.length;
        loadQuestion();
      }, 1000);
    };
    choicesEl.appendChild(btn);
  });
}

loadQuestion();