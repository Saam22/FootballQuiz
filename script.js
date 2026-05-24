
// ============== DATA ==============
const quizData = {
  javascript: [
    { q:"What does 'typeof null' return in JavaScript?", answers:["object","null","undefined","boolean"], correct:0, exp:"This is a famous JS bug. typeof null returns 'object' since the early days." },
    { q:"Which method removes the last element from an array?", answers:["shift()","pop()","splice()","delete()"], correct:1, exp:"pop() removes and returns the last element. shift() removes the first." },
    { q:"What is the output of: console.log(0.1 + 0.2 === 0.3)?", answers:["true","false","undefined","NaN"], correct:1, exp:"Floating point precision issue: 0.1+0.2 = 0.30000000000000004" },
    { q:"What does '===' mean in JavaScript?", answers:["Assignment","Loose equality","Strict equality","Not equal"], correct:2, exp:"=== checks both value AND type. == only checks value (with coercion)." },
    { q:"Which keyword declares a block-scoped variable?", answers:["var","global","let","function"], correct:2, exp:"let and const are block-scoped. var is function-scoped." },
    { q:"What does JSON stand for?", answers:["Java Standard Object Notation","JavaScript Object Notation","Java Script On Net","Just Simple Object Names"], correct:1, exp:"JSON = JavaScript Object Notation, used for data interchange." },
    { q:"How do you write an arrow function?", answers:["function() =>","=> function()","() => {}","func() {}"], correct:2, exp:"Arrow functions syntax: (params) => expression or (params) => { body }" },
    { q:"What does 'NaN === NaN' return?", answers:["true","false","Error","null"], correct:1, exp:"NaN is the only value in JS not equal to itself. Use Number.isNaN() to check." },
    { q:"Which loop is guaranteed to run at least once?", answers:["for","while","do...while","forEach"], correct:2, exp:"do...while checks the condition AFTER executing, so it always runs once." },
    { q:"What is a closure in JavaScript?", answers:["A loop that closes","A function accessing outer scope","A shut-down process","A CSS technique"], correct:1, exp:"A closure is when a function remembers variables from its outer (enclosing) scope." },
  ],
  html: [
    { q:"What does HTML stand for?", answers:["Hyper Text Markup Language","High Text Machine Language","Hyper Transfer Markup Logic","Hot Text Making Language"], correct:0, exp:"HTML = HyperText Markup Language, the standard language for web pages." },
    { q:"Which tag creates a hyperlink?", answers:["<link>","<a>","<href>","<url>"], correct:1, exp:"The <a> (anchor) tag creates hyperlinks using the href attribute." },
    { q:"Which CSS property changes text color?", answers:["font-color","text-color","color","foreground"], correct:2, exp:"The 'color' property sets the foreground (text) color in CSS." },
    { q:"What is the CSS box model?", answers:["A 3D cube effect","content, padding, border, margin","A layout algorithm","A flexbox method"], correct:1, exp:"The box model defines: content → padding → border → margin, from inside out." },
    { q:"Which HTML5 tag defines navigation?", answers:["<menu>","<navigation>","<nav>","<links>"], correct:2, exp:"<nav> is a semantic HTML5 element that defines navigation links." },
    { q:"What does 'display: flex' do?", answers:["Hides element","Makes element flexible/responsive","Removes margin","Changes font"], correct:1, exp:"Flexbox is a 1D layout model that distributes space along an axis." },
    { q:"Which attribute adds alternative text to images?", answers:["title","src","alt","desc"], correct:2, exp:"The alt attribute provides text shown when image can't load, and helps accessibility." },
    { q:"What is CSS specificity?", answers:["Animation speed","Rules for which styles apply","Font loading priority","Server response"], correct:1, exp:"Specificity determines which CSS rule wins when multiple rules target the same element." },
    { q:"Which HTML element is for the largest heading?", answers:["<h6>","<heading>","<h1>","<title>"], correct:2, exp:"<h1> is the most important heading (h1-h6, largest to smallest)." },
    { q:"What does 'position: absolute' do?", answers:["Locks to viewport","Positions relative to nearest non-static ancestor","Centers element","Floats left"], correct:1, exp:"Absolute positioning removes element from normal flow and positions it relative to its positioned ancestor." },
  ],
  science: [
    { q:"What is the speed of light?", answers:["300,000 km/s","150,000 km/s","500,000 km/s","1,000,000 km/s"], correct:0, exp:"Light travels at approximately 299,792 km/s (often rounded to 300,000 km/s) in vacuum." },
    { q:"What is the chemical symbol for water?", answers:["WA","HO","H2O","W2O"], correct:2, exp:"H2O: two hydrogen atoms bonded to one oxygen atom." },
    { q:"How many planets are in our solar system?", answers:["7","8","9","10"], correct:1, exp:"8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune (Pluto was reclassified in 2006)." },
    { q:"What force keeps planets in orbit?", answers:["Magnetism","Nuclear force","Gravity","Friction"], correct:2, exp:"Gravity is the attractive force between masses that keeps planets in their orbits." },
    { q:"What is the powerhouse of the cell?", answers:["Nucleus","Ribosome","Mitochondria","Cell wall"], correct:2, exp:"Mitochondria produce ATP (energy) through cellular respiration." },
    { q:"What is DNA?", answers:["A protein","Genetic material","A vitamin","An enzyme"], correct:1, exp:"DNA (Deoxyribonucleic Acid) carries genetic information in living organisms." },
    { q:"What is Newton's first law called?", answers:["Law of Gravity","Law of Inertia","Law of Action","Law of Energy"], correct:1, exp:"The Law of Inertia: an object stays at rest or in motion unless acted on by a force." },
    { q:"What percentage of Earth is water?", answers:["50%","61%","71%","80%"], correct:2, exp:"About 71% of Earth's surface is water, but 97% of it is salt water." },
    { q:"What is photosynthesis?", answers:["Cell division","Plants making food from light","Animal digestion","Water evaporation"], correct:1, exp:"Photosynthesis converts CO2 + water + sunlight → glucose + oxygen." },
    { q:"What is the atomic number of Carbon?", answers:["6","12","8","4"], correct:0, exp:"Carbon (C) has 6 protons, so its atomic number is 6." },
  ],
  history: [
    { q:"When did World War II end?", answers:["1943","1944","1945","1946"], correct:2, exp:"WWII ended in 1945: V-E Day (May 8) in Europe, V-J Day (Sep 2) in the Pacific." },
    { q:"Who was the first US President?", answers:["Abraham Lincoln","John Adams","Thomas Jefferson","George Washington"], correct:3, exp:"George Washington served as the first President from 1789 to 1797." },
    { q:"Where was the Titanic headed when it sank?", answers:["London","New York","Boston","Paris"], correct:1, exp:"The Titanic was on its maiden voyage from Southampton to New York City in 1912." },
    { q:"Which ancient wonder still stands today?", answers:["Hanging Gardens","Colossus of Rhodes","Great Pyramid of Giza","Lighthouse of Alexandria"], correct:2, exp:"The Great Pyramid of Giza is the only ancient wonder of the world still largely intact." },
    { q:"In what year did the Berlin Wall fall?", answers:["1987","1988","1989","1990"], correct:2, exp:"The Berlin Wall fell on November 9, 1989, symbolizing the end of the Cold War." },
    { q:"Which empire was ruled by Julius Caesar?", answers:["Greek","Persian","Roman","Ottoman"], correct:2, exp:"Julius Caesar was a Roman general and statesman who played a key role in the Roman Republic." },
    { q:"When did the French Revolution begin?", answers:["1776","1783","1789","1799"], correct:2, exp:"The French Revolution began in 1789 with the storming of the Bastille on July 14." },
    { q:"Who invented the telephone?", answers:["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Guglielmo Marconi"], correct:2, exp:"Alexander Graham Bell is credited with inventing and patenting the telephone in 1876." },
    { q:"Which country launched the first satellite?", answers:["USA","Germany","China","USSR"], correct:3, exp:"The USSR launched Sputnik 1 on October 4, 1957, the first artificial Earth satellite." },
    { q:"When did the first moon landing occur?", answers:["1965","1967","1969","1971"], correct:2, exp:"Apollo 11 landed on the Moon on July 20, 1969. Neil Armstrong was first to walk on it." },
  ]
};

// ============== STATE ==============
let state = {
  category: 'javascript',
  difficulty: 'easy',
  questions: [],
  currentQ: 0,
  correct: 0,
  wrong: 0,
  points: 0,
  timer: null,
  timeLeft: 15,
  answered: false,
  timeTaken: [],
  timeStart: 0
};

const timeByDiff = { easy: 20, medium: 15, hard: 10 };
const pointsByDiff = { easy: 10, medium: 20, hard: 30 };

// ============== PARTICLES ==============
function createParticles() {
  const wrap = document.getElementById('particles');
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 10 + 8) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.width = p.style.height = (Math.random() * 3 + 1) + 'px';
    p.style.opacity = Math.random() * 0.6;
    wrap.appendChild(p);
  }
}

// ============== CONFETTI ==============
function launchConfetti() {
  const wrap = document.getElementById('confetti');
  wrap.innerHTML = '';
  const colors = ['#7c3aed','#a855f7','#10b981','#f59e0b','#ec4899','#3b82f6'];
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.left = Math.random() * 100 + '%';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.width = (Math.random() * 12 + 6) + 'px';
    c.style.height = (Math.random() * 12 + 6) + 'px';
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    c.style.animationDuration = (Math.random() * 2 + 2) + 's';
    c.style.animationDelay = (Math.random() * 1.5) + 's';
    wrap.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// ============== SCREEN NAVIGATION ==============
function goToScreen(id) {
  const current = document.querySelector('.screen.active');
  if (current) {
    current.classList.add('leaving');
    setTimeout(() => {
      current.classList.remove('active', 'leaving');
    }, 300);
  }
  setTimeout(() => {
    const next = document.getElementById(id);
    next.classList.add('active');
  }, 200);
}

// ============== WELCOME ==============
function selectCategory(btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.category = btn.dataset.cat;
}

function selectDiff(btn) {
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.difficulty = btn.dataset.d;
}

// ============== QUIZ LOGIC ==============
function startQuiz() {
  // Shuffle and pick 10
  const all = [...quizData[state.category]];
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  state.questions = all.slice(0, 10);
  state.currentQ = 0;
  state.correct = 0;
  state.wrong = 0;
  state.points = 0;
  state.timeTaken = [];

  goToScreen('screen-quiz');
  setTimeout(renderQuestion, 300);
}

function renderQuestion() {
  const q = state.questions[state.currentQ];
  const total = state.questions.length;

  document.getElementById('q-num').textContent = state.currentQ + 1;
  document.getElementById('q-total').textContent = total;
  document.getElementById('progress-fill').style.width = ((state.currentQ + 1) / total * 100) + '%';
  document.getElementById('score-correct').textContent = state.correct;
  document.getElementById('score-wrong').textContent = state.wrong;
  document.getElementById('score-pts').textContent = state.points;

  const catLabels = { javascript:'🟨 JavaScript', html:'🟧 HTML & CSS', science:'🔬 Science', history:'🏛️ History' };
  document.getElementById('q-badge').textContent = catLabels[state.category];
  document.getElementById('question-text').textContent = q.q;
  document.getElementById('feedback-bar').className = 'feedback-bar';
  document.getElementById('explanation').className = 'explanation';
  document.getElementById('explanation').textContent = '';

  // Shuffle answers
  const letters = ['A','B','C','D'];
  const indices = [0,1,2,3];
  for (let i=3;i>0;i--){const j=Math.floor(Math.random()*(i+1));[indices[i],indices[j]]=[indices[j],indices[i]];}

  const grid = document.getElementById('answers-grid');
  grid.innerHTML = '';
  state.shuffledCorrect = indices.indexOf(q.correct);

  indices.forEach((origIdx, pos) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="answer-letter">${letters[pos]}</span> ${q.answers[origIdx]}`;
    btn.dataset.isCorrect = (origIdx === q.correct);
    btn.onclick = () => selectAnswer(btn, origIdx === q.correct, q);
    grid.appendChild(btn);
  });

  state.answered = false;
  startTimer();
  state.timeStart = Date.now();
}

function startTimer() {
  clearInterval(state.timer);
  state.timeLeft = timeByDiff[state.difficulty];
  updateTimerUI();
  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      timeOut();
    }
  }, 1000);
}

function updateTimerUI() {
  document.getElementById('timer').textContent = state.timeLeft;
  const wrap = document.getElementById('timer-wrap');
  wrap.className = state.timeLeft <= 5 ? 'timer-wrap danger' : 'timer-wrap';
}

function timeOut() {
  if (state.answered) return;
  state.answered = true;
  state.wrong++;
  state.timeTaken.push(timeByDiff[state.difficulty]);

  // Highlight correct
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.isCorrect === 'true') btn.classList.add('correct');
  });

  showFeedback(false, "⏱ Time's up!");
  setTimeout(nextQuestion, 2200);
}

function selectAnswer(btn, isCorrect, q) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);

  const taken = Math.round((Date.now() - state.timeStart) / 1000);
  state.timeTaken.push(taken);

  document.querySelectorAll('.answer-btn').forEach(b => b.disabled = true);

  if (isCorrect) {
    btn.classList.add('correct');
    state.correct++;
    const bonus = Math.max(1, state.timeLeft);
    const pts = pointsByDiff[state.difficulty] + bonus;
    state.points += pts;
    showFeedback(true, `✓ Correct! +${pts} points`);
  } else {
    btn.classList.add('wrong');
    state.wrong++;
    // show correct
    document.querySelectorAll('.answer-btn').forEach(b => {
      if (b.dataset.isCorrect === 'true') b.classList.add('correct');
    });
    showFeedback(false, '✗ Wrong answer!');
  }

  // Explanation
  const exp = document.getElementById('explanation');
  exp.textContent = '💡 ' + q.exp;
  exp.className = 'explanation show';

  document.getElementById('score-correct').textContent = state.correct;
  document.getElementById('score-wrong').textContent = state.wrong;
  document.getElementById('score-pts').textContent = state.points;

  setTimeout(nextQuestion, 2500);
}

function showFeedback(correct, msg) {
  const bar = document.getElementById('feedback-bar');
  bar.textContent = msg;
  bar.className = 'feedback-bar show ' + (correct ? 'correct-fb' : 'wrong-fb');
}

function nextQuestion() {
  state.currentQ++;
  if (state.currentQ >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ============== RESULTS ==============
function showResults() {
  const total = state.questions.length;
  const pct = Math.round(state.correct / total * 100);
  const avgTime = state.timeTaken.length
    ? Math.round(state.timeTaken.reduce((a,b) => a+b, 0) / state.timeTaken.length)
    : 0;

  document.getElementById('res-pct').textContent = pct + '%';
  document.getElementById('res-correct').textContent = state.correct;
  document.getElementById('res-wrong').textContent = state.wrong;
  document.getElementById('res-time').textContent = avgTime + 's';

  let emoji, title, sub;
  if (pct === 100) { emoji='🏆'; title='PERFECT!'; sub='Flawless victory! You got them all!'; }
  else if (pct >= 80) { emoji='🎉'; title='Excellent!'; sub='You have impressive knowledge!'; }
  else if (pct >= 60) { emoji='👍'; title='Good Job!'; sub='Solid performance, keep learning!'; }
  else if (pct >= 40) { emoji='📚'; title='Keep Going!'; sub='Practice makes perfect!'; }
  else { emoji='💪'; title='Try Again!'; sub='Review the material and come back stronger!'; }

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-title').textContent = title;
  document.getElementById('res-subtitle').textContent = sub;

  goToScreen('screen-result');
  if (pct >= 80) setTimeout(launchConfetti, 400);
}

function playAgain() {
  startQuiz();
}

function goHome() {
  goToScreen('screen-welcome');
}

// ============== INIT ==============
createParticles();
