const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// تحميل الأسئلة من ملف JSON
const questions = JSON.parse(fs.readFileSync('questions.json'));

app.use(express.static('public'));

let currentQuestion = null;
let answers = {};
let questionTimer = null;

// إرسال سؤال جديد لجميع المشاهدين
function startNewQuestion() {
  if (questions.length > 0) {
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    answers = { 1: 0, 2: 0, 3: 0, 4: 0 };
    io.emit('newQuestion', currentQuestion);

    // ضبط مؤقت 45 ثانية
    questionTimer = setTimeout(() => {
      io.emit('questionClosed', {
        question: currentQuestion,
        results: answers,
        correctAnswer: currentQuestion.correctAnswer
      });
      currentQuestion = null;
    }, 45 * 1000);
  }
}

// عند اتصال عميل جديد
io.on('connection', (socket) => {
  if (currentQuestion) {
    socket.emit('newQuestion', currentQuestion);
  }

  // استقبال إجابة من المشاهد
  socket.on('submitAnswer', (answer) => {
    if (currentQuestion && questionTimer && answer >= 1 && answer <= 4) {
      answers[answer]++;
      io.emit('answerUpdate', answers);
    }
  });
});

// نقطة نهاية لبدء سؤال جديد (يستخدمها المذيع)
app.get('/start', (req, res) => {
  if (!currentQuestion) {
    startNewQuestion();
    res.send('Started new question');
  } else {
    res.send('Question already in progress');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});