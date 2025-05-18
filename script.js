const questions = [
  {
    image: "Images/Gambar1.jpg",
    question: "Apa nama hewan ini?",
    choices: ["Gajah", "Singa", "Harimau", "Zebra"],
    answer: "Gajah"
  },
  {
    image: "Images/Gambar2.jpg",
    question: "Apa nama buah ini?",
    choices: ["Apel", "Mangga", "Pisang", "Durian"],
    answer: "Mangga"
  },
  {
    image: "Images/Gambar3.jpg",
    question: "Apa nama alat ini?",
    choices: ["Gergaji", "Obeng", "Palu", "Tang"],
    answer: "Palu"
  }
];

let currentQuestion = 0;
let score = 0;

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
    score++;
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
      document.getElementById("question").textContent = "Selesai!";
      document.getElementById("choices").innerHTML = "";
      document.getElementById("questionImage").style.display = "none";
    }
  }, 5000);
}

loadQuestion();