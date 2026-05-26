// ══════════════════════════════
//  FULL QUESTION DATA
// ══════════════════════════════
const data = {
  players:[
    {q:"How many Ballon d'Or awards has Lionel Messi won?",a:["7","6","8","5"],c:2,exp:"Messi has won 8 Ballon d'Or awards — more than any other player in history."},
    {q:"Which player is known as 'CR7'?",a:["Ronaldinho","Cristiano Ronaldo","Carlos Ruiz","Claudio Reyna"],c:1,exp:"CR7 = Cristiano Ronaldo, his initials and famous jersey number."},
    {q:"Who is the all-time top scorer for Brazil national team?",a:["Pelé","Ronaldo","Neymar","Romário"],c:2,exp:"Neymar surpassed Pelé's 77 goals to become Brazil's all-time top scorer."},
    {q:"Who scored the 'Hand of God' goal in the 1986 World Cup?",a:["Pelé","Ronaldo","Diego Maradona","Zidane"],c:2,exp:"Maradona scored the controversial Hand of God goal against England in the 1986 quarter-final."},
    {q:"Which goalkeeper has the most clean sheets in Champions League history?",a:["Schmeichel","Buffon","Iker Casillas","Neuer"],c:2,exp:"Iker Casillas holds the UCL record for most clean sheets."},
    {q:"Who is known as 'The Egyptian King'?",a:["Salah","Mane","Aubameyang","Ziyech"],c:0,exp:"Mohamed Salah is nicknamed 'The Egyptian King' or 'The Pharaoh'."},
    {q:"Which player has scored the most hat-tricks in La Liga?",a:["Raúl","Benzema","Cristiano Ronaldo","Lionel Messi"],c:3,exp:"Messi holds the record for most hat-tricks in La Liga history."},
    {q:"Who was the first African player to win FIFA World Player of the Year?",a:["George Weah","Drogba","Okocha","Kanu"],c:0,exp:"George Weah of Liberia won the award in 1995."},
    {q:"Which club did Ronaldinho win the Ballon d'Or with?",a:["PSG","AC Milan","Barcelona","Flamengo"],c:2,exp:"Ronaldinho won the 2005 Ballon d'Or while at FC Barcelona."},
    {q:"Zlatan Ibrahimović played for how many different clubs in his career?",a:["8","9","10","11"],c:2,exp:"Ibrahimović played for 10 clubs: Ajax, Juventus, Inter, Barça, AC Milan, PSG, Man Utd, LA Galaxy, AC Milan again, Bologna."},
    {q:"Which player has won the most Premier League titles?",a:["Ryan Giggs","Paul Scholes","Gary Neville","John Terry"],c:0,exp:"Ryan Giggs won 13 Premier League titles with Manchester United — a record."},
    {q:"Who scored the fastest hat-trick in Premier League history?",a:["Sadio Mané","Robbie Fowler","Jermain Defoe","Sergio Agüero"],c:0,exp:"Sadio Mané scored a hat-trick in just 2 minutes 56 seconds for Southampton in 2015."},
  ],
  clubs:[
    {q:"Which club has won the most UEFA Champions League titles?",a:["Barcelona","AC Milan","Bayern Munich","Real Madrid"],c:3,exp:"Real Madrid have won the Champions League a record 15 times."},
    {q:"Which English club is known as 'The Red Devils'?",a:["Liverpool","Arsenal","Manchester United","Forest"],c:2,exp:"Manchester United are known as The Red Devils."},
    {q:"Which club plays at the Camp Nou?",a:["Real Madrid","Atletico","Barcelona","Valencia"],c:2,exp:"FC Barcelona play at the Camp Nou, the largest stadium in Europe."},
    {q:"Which Italian club is nicknamed 'The Old Lady'?",a:["AC Milan","Inter Milan","Roma","Juventus"],c:3,exp:"Juventus = La Vecchia Signora (The Old Lady)."},
    {q:"Which club did Pep Guardiola NOT manage?",a:["Barcelona","Bayern Munich","Chelsea","Man City"],c:2,exp:"Guardiola managed Barça, Bayern, and Man City — but not Chelsea."},
    {q:"How many times has AC Milan won the Champions League?",a:["5","6","7","8"],c:2,exp:"AC Milan have won it 7 times — second only to Real Madrid."},
    {q:"Which club has won the most Premier League titles?",a:["Liverpool","Chelsea","Arsenal","Manchester United"],c:3,exp:"Manchester United have 20 Premier League titles."},
    {q:"Ajax is based in which city?",a:["Rotterdam","Brussels","Amsterdam","Antwerp"],c:2,exp:"AFC Ajax is based in Amsterdam, Netherlands."},
    {q:"Which club signed Cristiano Ronaldo for a world-record fee in 2009?",a:["PSG","Juventus","Real Madrid","Atletico"],c:2,exp:"Real Madrid signed Ronaldo from Man Utd for €94 million in 2009."},
    {q:"Which club did Lionel Messi join after leaving Barcelona in 2021?",a:["Man City","Chelsea","PSG","Inter Miami"],c:2,exp:"Messi joined Paris Saint-Germain (PSG) in August 2021."},
  ],
  worldcup:[
    {q:"Which country has won the most FIFA World Cups?",a:["Germany","Argentina","Italy","Brazil"],c:3,exp:"Brazil have won 5 World Cups — 1958, 1962, 1970, 1994, 2002."},
    {q:"Where was the first FIFA World Cup held in 1930?",a:["Brazil","Argentina","Uruguay","Chile"],c:2,exp:"The first World Cup was held in Uruguay, who also won it."},
    {q:"Who won the 2022 FIFA World Cup in Qatar?",a:["France","Brazil","Argentina","Morocco"],c:2,exp:"Argentina beat France on penalties in a historic 2022 final."},
    {q:"Who won the Golden Boot at the 2018 World Cup?",a:["Mbappé","Cristiano Ronaldo","Harry Kane","Lukaku"],c:2,exp:"Harry Kane won it with 6 goals for England."},
    {q:"Germany beat Brazil __ in the 2014 World Cup semi-final?",a:["5-0","6-1","7-1","4-0"],c:2,exp:"Germany humiliated Brazil 7-1 in the 'Mineirazo'."},
    {q:"Who scored the winning goal in the 2010 World Cup final?",a:["David Villa","Xavi","Iniesta","Torres"],c:2,exp:"Andrés Iniesta scored in extra time as Spain beat Netherlands 1-0."},
    {q:"How many times has England won the World Cup?",a:["0","1","2","3"],c:1,exp:"England won once — in 1966 at Wembley, beating West Germany 4-2."},
    {q:"Which nation hosted the 2014 World Cup?",a:["Argentina","Chile","Uruguay","Brazil"],c:3,exp:"Brazil hosted the 2014 World Cup, which Germany won."},
    {q:"Who scored the most goals in a single World Cup edition?",a:["Ronaldo","Messi","Just Fontaine","Müller"],c:2,exp:"Just Fontaine scored 13 goals for France at the 1958 World Cup — a record that still stands."},
    {q:"Which country was the first to win back-to-back World Cups?",a:["Brazil","Italy","Germany","Argentina"],c:1,exp:"Italy won back-to-back World Cups in 1934 and 1938."},
  ],
  egypt:[
    {q:"Which Egyptian club has won the most league titles?",a:["Zamalek","Pyramids","Al Ahly","Ismaily"],c:2,exp:"Al Ahly is the most decorated club in Egypt with 40+ league titles."},
    {q:"Al Ahly is nicknamed what?",a:["The Red Devils","The Eagles","Club of the Century","The White Knights"],c:2,exp:"Al Ahly was voted 'Club of the Century' in Africa by CAF in 2000."},
    {q:"What colours does Zamalek wear?",a:["Red & Black","All Red","White & Gold","Blue & White"],c:2,exp:"Zamalek wear white and gold — they are known as 'The White Knights'."},
    {q:"How many times has Al Ahly won the CAF Champions League?",a:["8","10","12","13"],c:3,exp:"Al Ahly have won the CAF Champions League a record 13 times."},
    {q:"Which Egyptian player won the Premier League Golden Boot in 2018?",a:["Trezeguet","Elneny","Mohamed Salah","Amr Zaki"],c:2,exp:"Mohamed Salah won the Premier League Golden Boot with 32 goals in 2017/18."},
    {q:"Which stadium is Al Ahly's home ground?",a:["Cairo International","Al Ahly Stadium","Borg El Arab","30 June Stadium"],c:0,exp:"Al Ahly play at Cairo International Stadium (also called Nasser Stadium)."},
    {q:"Which Egyptian club is known as 'The White Knights'?",a:["Al Ahly","Pyramids","Zamalek","Ismaily"],c:2,exp:"Zamalek SC are nicknamed 'The White Knights' (الفارس الأبيض)."},
    {q:"Who is the Egyptian national team nicknamed?",a:["The Pharaohs","The Eagles","The Lions","The Stars"],c:0,exp:"Egypt's national team is called 'The Pharaohs' (الفراعنة)."},
    {q:"Mohamed Salah plays for which Premier League club?",a:["Arsenal","Chelsea","Liverpool","Man City"],c:2,exp:"Mohamed Salah has been at Liverpool FC since 2017."},
    {q:"How many times has Egypt won the Africa Cup of Nations?",a:["5","6","7","8"],c:2,exp:"Egypt have won the Africa Cup of Nations a record 7 times."},
  ],
  rules:[
    {q:"How many players are on each team in a standard football match?",a:["9","10","11","12"],c:2,exp:"Each team has 11 players including the goalkeeper."},
    {q:"How long is a standard football match?",a:["80 min","100 min","90 min","85 min"],c:2,exp:"90 minutes: two halves of 45 minutes plus added time."},
    {q:"From what distance is a penalty kick taken?",a:["10 yards","11 metres","12 metres","11 yards"],c:1,exp:"The penalty spot is 11 metres (12 yards) from the goal line."},
    {q:"What is a 'brace' in football?",a:["A tackle foul","Two goals by one player","A hat-trick","An own goal"],c:1,exp:"A brace = two goals by one player in a single match."},
    {q:"What colour card results in a player being sent off?",a:["Blue","Yellow","Orange","Red"],c:3,exp:"A red card (or two yellows) = sent off, cannot be replaced."},
    {q:"How many substitutions are allowed per team in competitive matches?",a:["3","4","5","6"],c:2,exp:"Since 2020, FIFA allows 5 substitutions per match."},
    {q:"What does VAR stand for?",a:["Video Assist Referee","Virtual Assistant Referee","Video Assistant Referee","Visual Accuracy Review"],c:2,exp:"VAR = Video Assistant Referee, used to review key decisions."},
    {q:"What is the offside rule based on?",a:["Being in opponent's half","Behind the last defender when ball is played","Facing the wrong way","Passing backwards"],c:1,exp:"Offside: a player is nearer the opponent's goal than both the ball and second-to-last defender when the ball is played."},
    {q:"How wide is a standard football goal?",a:["6.4m","7.32m","8m","7m"],c:1,exp:"Official goal: 7.32m wide and 2.44m high."},
    {q:"What is a 'hat-trick' in football?",a:["Three assists","Two goals","Three goals by one player","Four goals"],c:2,exp:"A hat-trick = three goals scored by the same player in one match."},
  ]
};

// Mixed = all combined
data.mixed = [...data.players,...data.clubs,...data.worldcup,...data.egypt,...data.rules];

// Daily questions pool
const dailyPool = [
  {q:"Which player has scored the most goals in Champions League history?",a:["Messi","Van Nistelrooy","Raúl","Cristiano Ronaldo"],c:3,exp:"Cristiano Ronaldo holds the record with 140+ Champions League goals."},
  {q:"Which country invented the sport of football?",a:["Brazil","Spain","England","Germany"],c:2,exp:"Modern football was codified in England in 1863 with the formation of the Football Association."},
  {q:"What trophy do Champions League winners receive?",a:["The Golden Cup","Big Ears","The Silver Shield","The Star Trophy"],c:1,exp:"The UCL trophy is nicknamed 'Big Ears' due to its distinctive handles."},
  {q:"Who won the first ever FIFA World Cup?",a:["Brazil","Argentina","Uruguay","Italy"],c:2,exp:"Uruguay won the first World Cup on home soil in 1930."},
  {q:"Which club has the most followers on social media globally?",a:["Real Madrid","Barcelona","Manchester United","PSG"],c:0,exp:"Real Madrid consistently lead all football clubs in total social media following."},
  {q:"The offside rule was introduced in which year?",a:["1863","1872","1925","1938"],c:1,exp:"The offside rule was introduced in 1872, though it was significantly reformed in 1925."},
  {q:"Which nation has appeared in the most World Cup finals?",a:["Italy","Germany","Brazil","Argentina"],c:1,exp:"Germany have appeared in 8 World Cup finals — more than any other nation."},
];

// ══════════════════════════════
//  STATE
// ══════════════════════════════
const state = {
  cat:'players', diff:'easy',
  questions:[], idx:0,
  correct:0, wrong:0, pts:0,
  streak:0, maxStreak:0,
  answered:false,
  timer:null, timeLeft:15,
  timeStart:0, timeTaken:[],
  lifelines:{ ff:true, skip:true, reveal:true },
  soundOn:true, theme:'dark',
  isDaily:false
};
const timeMap={easy:20,medium:15,hard:10};
const ptsMap={easy:10,medium:20,hard:30};
const badgeMap={players:'⭐ Players',clubs:'🏟️ Clubs',worldcup:'🏆 World Cup',egypt:'🇪🇬 Egyptian League',rules:'📋 Rules',mixed:'🎲 Mixed'};

// ══════════════════════════════
//  PERSISTENCE
// ══════════════════════════════
function loadSave(){return JSON.parse(localStorage.getItem('fiq_save')||'{"games":0,"totalPts":0,"totalCorrect":0,"totalQ":0,"catStats":{},"leaderboard":[],"dailyDone":"","achievements":[]}');}
function writeSave(s){localStorage.setItem('fiq_save',JSON.stringify(s));}

// ══════════════════════════════
//  SOUND (Web Audio API)
// ══════════════════════════════
let audioCtx=null;
function getAudio(){
  if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();
  return audioCtx;
}
function playTone(freq,dur,type='sine',vol=0.3){
  if(!state.soundOn)return;
  try{
    const ac=getAudio();
    const o=ac.createOscillator(),g=ac.createGain();
    o.connect(g);g.connect(ac.destination);
    o.type=type;o.frequency.value=freq;
    g.gain.setValueAtTime(vol,ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+dur);
    o.start();o.stop(ac.currentTime+dur);
  }catch(e){}
}
function sfxCorrect(){playTone(523,0.1);setTimeout(()=>playTone(659,0.1),80);setTimeout(()=>playTone(784,0.2),160);}
function sfxWrong(){playTone(200,0.3,'sawtooth',0.2);}
function sfxTick(){playTone(880,0.05,'square',0.05);}
function sfxGoal(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,0.15),i*80));}

// ══════════════════════════════
//  THEME & SOUND TOGGLES
// ══════════════════════════════
function toggleTheme(){
  state.theme = state.theme==='dark'?'light':'dark';
  document.body.classList.toggle('light',state.theme==='light');
  document.getElementById('theme-btn').textContent = state.theme==='dark'?'🌙':'☀️';
}
function toggleSound(){
  state.soundOn=!state.soundOn;
  document.getElementById('sound-btn').textContent=state.soundOn?'🔊':'🔇';
}

// ══════════════════════════════
//  PARTICLES
// ══════════════════════════════
(function(){
  const w=document.getElementById('particles');
  for(let i=0;i<20;i++){
    const p=document.createElement('div');p.className='particle';
    p.style.cssText=`left:${Math.random()*100}%;width:${Math.random()*3+1}px;height:${Math.random()*3+1}px;animation-duration:${Math.random()*12+8}s;animation-delay:${Math.random()*12}s;`;
    w.appendChild(p);
  }
})();

// ══════════════════════════════
//  CONFETTI
// ══════════════════════════════
function launchConfetti(){
  const w=document.getElementById('confetti');w.innerHTML='';
  const cols=['#16a34a','#22c55e','#f59e0b','#fff','#86efac','#fde68a'];
  for(let i=0;i<100;i++){
    const c=document.createElement('div');c.className='cf';
    c.style.cssText=`left:${Math.random()*100}%;width:${Math.random()*12+5}px;height:${Math.random()*12+5}px;background:${cols[~~(Math.random()*cols.length)]};border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${Math.random()*2+2}s;animation-delay:${Math.random()*1.5}s;`;
    w.appendChild(c);setTimeout(()=>c.remove(),4500);
  }
}

// ══════════════════════════════
//  GOAL ANIMATION
// ══════════════════════════════
function showGoal(){
  const el=document.getElementById('goal-text');
  el.textContent=['GOAL! ⚽','GOLAZO! 🔥','MAGNIFICO! ✨'][~~(Math.random()*3)];
  el.className='goal-text show';
  sfxGoal();
  setTimeout(()=>{el.className='goal-text';},1300);
}

// ══════════════════════════════
//  SCREEN NAV
// ══════════════════════════════
function goTo(id){
  const cur=document.querySelector('.screen.active');
  if(cur){cur.classList.add('leaving');setTimeout(()=>cur.classList.remove('active','leaving'),300);}
  setTimeout(()=>{
    document.getElementById(id).classList.add('active');
    if(id==='screen-leaderboard')renderLeaderboard();
    if(id==='screen-stats')renderStats();
    if(id==='screen-daily')renderDaily();
  },200);
}
function goHome(){goTo('screen-welcome');checkDaily();}

// ══════════════════════════════
//  WELCOME ACTIONS
// ══════════════════════════════
function pickCat(btn){document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');state.cat=btn.dataset.cat;}
function pickDiff(btn){document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');state.diff=btn.dataset.d;}

// ══════════════════════════════
//  DAILY CHALLENGE
// ══════════════════════════════
function checkDaily(){
  const today=new Date().toDateString();
  const save=loadSave();
  const done=save.dailyDone===today;
  const banner=document.getElementById('daily-banner');
  const badge=document.getElementById('daily-badge');
  const sub=document.getElementById('daily-sub');
  if(done){
    banner.classList.add('daily-done');
    badge.textContent='✓ DONE';
    sub.textContent='Come back tomorrow for a new challenge!';
  } else {
    banner.classList.remove('daily-done');
    badge.textContent='NEW';
    sub.textContent='New question every day!';
  }
}
function renderDaily(){
  const today=new Date().toDateString();
  document.getElementById('daily-date-label').textContent=today;
  // Pick question based on day of year
  const doy=Math.floor((new Date()-new Date(new Date().getFullYear(),0,0))/(1000*60*60*24));
  const q=dailyPool[doy % dailyPool.length];
  document.getElementById('daily-q-text').textContent=q.q;
  document.getElementById('daily-feedback').className='feedback';
  document.getElementById('daily-explanation').className='explanation';

  const save=loadSave();
  const done=save.dailyDone===today;
  const grid=document.getElementById('daily-answers');
  grid.innerHTML='';
  const letters=['A','B','C','D'];
  const order=[0,1,2,3];
  for(let i=3;i>0;i--){const j=~~(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
  order.forEach((oi,pos)=>{
    const btn=document.createElement('button');
    btn.className='ans-btn';
    btn.dataset.correct=(oi===q.c);
    btn.innerHTML=`<span class="ans-letter">${letters[pos]}</span>${q.a[oi]}`;
    if(done)btn.disabled=true;
    else btn.onclick=()=>answerDaily(btn,oi===q.c,q);
    grid.appendChild(btn);
  });
  if(done){
    document.getElementById('daily-feedback').textContent='✓ Already completed today!';
    document.getElementById('daily-feedback').className='feedback show ok';
  }
}
function answerDaily(btn,isRight,q){
  document.querySelectorAll('#daily-answers .ans-btn').forEach(b=>b.disabled=true);
  if(isRight){btn.classList.add('correct');sfxCorrect();}
  else{btn.classList.add('wrong');sfxWrong();document.querySelectorAll('#daily-answers .ans-btn').forEach(b=>{if(b.dataset.correct==='true')b.classList.add('correct');});}
  const fb=document.getElementById('daily-feedback');
  fb.textContent=isRight?'⚽ Correct!':'🟥 Wrong!';
  fb.className='feedback show '+(isRight?'ok':'no');
  const exp=document.getElementById('daily-explanation');
  exp.textContent='💡 '+q.exp;exp.classList.add('show');
  const today=new Date().toDateString();
  const save=loadSave();
  save.dailyDone=today;
  if(isRight){save.totalCorrect=(save.totalCorrect||0)+1;save.totalPts=(save.totalPts||0)+50;}
  writeSave(save);checkDaily();
  if(isRight)setTimeout(launchConfetti,300);
}

// ══════════════════════════════
//  START QUIZ
// ══════════════════════════════
function startQuiz(){
  const pool=[...data[state.cat]];
  for(let i=pool.length-1;i>0;i--){const j=~~(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  state.questions=pool.slice(0,10);
  state.idx=0;state.correct=0;state.wrong=0;state.pts=0;
  state.streak=0;state.maxStreak=0;state.timeTaken=[];
  state.lifelines={ff:true,skip:true,reveal:true};
  state.isDaily=false;
  resetLifelineUI();
  goTo('screen-quiz');
  setTimeout(renderQ,300);
}

// ══════════════════════════════
//  STREAK DOTS
// ══════════════════════════════
function renderStreakDots(){
  const wrap=document.getElementById('streak-dots');
  wrap.innerHTML='';
  const target=3;
  for(let i=0;i<target;i++){
    const d=document.createElement('div');
    d.className='streak-dot'+(i<state.streak%target||state.streak>=target&&state.streak%target===0&&state.streak>0?' hit':'');
    d.textContent=i<(state.streak%target||state.streak>=target?target:0)?'⚽':'';
    wrap.appendChild(d);
  }
  const bonus=document.getElementById('streak-bonus');
  bonus.textContent=state.streak>=3?'+BONUS x'+Math.floor(state.streak/3):'';
}

// ══════════════════════════════
//  RENDER QUESTION
// ══════════════════════════════
function renderQ(){
  const q=state.questions[state.idx];
  const tot=state.questions.length;
  document.getElementById('q-num').textContent=state.idx+1;
  document.getElementById('q-tot').textContent=tot;
  document.getElementById('prog-fill').style.width=((state.idx+1)/tot*100)+'%';
  document.getElementById('sc-correct').textContent=state.correct;
  document.getElementById('sc-wrong').textContent=state.wrong;
  document.getElementById('sc-pts').textContent=state.pts;
  document.getElementById('sc-streak').textContent=state.streak+'🔥';
  document.getElementById('q-badge').textContent=badgeMap[state.cat];
  document.getElementById('q-text').textContent=q.q;
  document.getElementById('feedback').className='feedback';
  document.getElementById('explanation').className='explanation';
  renderStreakDots();

  const order=[0,1,2,3];
  for(let i=3;i>0;i--){const j=~~(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
  const letters=['A','B','C','D'];
  const grid=document.getElementById('answers');grid.innerHTML='';
  order.forEach((oi,pos)=>{
    const btn=document.createElement('button');btn.className='ans-btn';
    btn.dataset.correct=(oi===q.c);btn.dataset.origIdx=oi;
    btn.innerHTML=`<span class="ans-letter">${letters[pos]}</span>${q.a[oi]}`;
    btn.onclick=()=>pick(btn,oi===q.c,q);
    grid.appendChild(btn);
  });
  state.answered=false;
  startTimer();
  state.timeStart=Date.now();
}

// ══════════════════════════════
//  TIMER
// ══════════════════════════════
function startTimer(){
  clearInterval(state.timer);
  state.timeLeft=timeMap[state.diff];renderTimer();
  state.timer=setInterval(()=>{
    state.timeLeft--;renderTimer();
    if(state.timeLeft>0&&state.timeLeft<=5)sfxTick();
    if(state.timeLeft<=0){clearInterval(state.timer);timeout();}
  },1000);
}
function renderTimer(){
  document.getElementById('timer').textContent=state.timeLeft;
  document.getElementById('timer-wrap').className=state.timeLeft<=5?'timer-display danger':'timer-display';
}
function timeout(){
  if(state.answered)return;
  state.answered=true;state.wrong++;state.streak=0;
  state.timeTaken.push(timeMap[state.diff]);
  document.querySelectorAll('.ans-btn').forEach(b=>{b.disabled=true;if(b.dataset.correct==='true')b.classList.add('correct');});
  showFeedback(false,"⏱ Time's up!");sfxWrong();
  setTimeout(next,2300);
}

// ══════════════════════════════
//  LIFELINES
// ══════════════════════════════
function resetLifelineUI(){
  ['ll-5050','ll-skip','ll-reveal'].forEach(id=>{document.getElementById(id).disabled=false;});
}
function use5050(){
  if(!state.lifelines.ff||state.answered)return;
  state.lifelines.ff=false;
  document.getElementById('ll-5050').disabled=true;
  const q=state.questions[state.idx];
  let hidden=0;
  document.querySelectorAll('.ans-btn').forEach(btn=>{
    if(btn.dataset.correct==='false'&&hidden<2){btn.classList.add('hidden-50');btn.disabled=true;hidden++;}
  });
  playTone(440,0.2);
}
function useSkip(){
  if(!state.lifelines.skip||state.answered)return;
  state.lifelines.skip=false;
  document.getElementById('ll-skip').disabled=true;
  clearInterval(state.timer);
  playTone(660,0.15);
  state.answered=true;
  state.timeTaken.push(0);
  setTimeout(next,300);
}
function useReveal(){
  if(!state.lifelines.reveal||state.answered)return;
  state.lifelines.reveal=false;
  document.getElementById('ll-reveal').disabled=true;
  const q=state.questions[state.idx];
  const exp=document.getElementById('explanation');
  exp.textContent='💡 '+q.exp;exp.classList.add('show');
  playTone(550,0.2);
}

// ══════════════════════════════
//  PICK ANSWER
// ══════════════════════════════
function pick(btn,isRight,q){
  if(state.answered)return;
  state.answered=true;clearInterval(state.timer);
  const taken=Math.round((Date.now()-state.timeStart)/1000);
  state.timeTaken.push(taken);
  document.querySelectorAll('.ans-btn').forEach(b=>b.disabled=true);
  if(isRight){
    btn.classList.add('correct');
    state.correct++;state.streak++;
    if(state.streak>state.maxStreak)state.maxStreak=state.streak;
    const bonus=Math.max(1,state.timeLeft);
    const streakBonus=state.streak>=3?Math.floor(state.streak/3)*5:0;
    const earned=ptsMap[state.diff]+bonus+streakBonus;
    state.pts+=earned;
    showFeedback(true,`⚽ Correct! +${earned} pts${streakBonus?` (🔥+${streakBonus} streak)`:''}`);;
    sfxCorrect();
    setTimeout(showGoal,100);
  } else {
    btn.classList.add('wrong');state.wrong++;state.streak=0;
    document.querySelectorAll('.ans-btn').forEach(b=>{if(b.dataset.correct==='true')b.classList.add('correct');});
    showFeedback(false,'🟥 Wrong answer!');sfxWrong();
  }
  const exp=document.getElementById('explanation');
  exp.textContent='💡 '+q.exp;exp.classList.add('show');
  document.getElementById('sc-correct').textContent=state.correct;
  document.getElementById('sc-wrong').textContent=state.wrong;
  document.getElementById('sc-pts').textContent=state.pts;
  document.getElementById('sc-streak').textContent=state.streak+'🔥';
  renderStreakDots();
  setTimeout(next,2600);
}
function showFeedback(ok,msg){const el=document.getElementById('feedback');el.textContent=msg;el.className='feedback show '+(ok?'ok':'no');}
function next(){state.idx++;state.idx>=state.questions.length?showResult():renderQ();}

// ══════════════════════════════
//  RESULT + BADGES + SAVE
// ══════════════════════════════
function showResult(){
  const tot=state.questions.length;
  const pct=Math.round(state.correct/tot*100);
  const avgT=state.timeTaken.length?Math.round(state.timeTaken.reduce((a,b)=>a+b,0)/state.timeTaken.length):0;
  document.getElementById('res-pct').textContent=pct+'%';
  document.getElementById('res-correct').textContent=state.correct;
  document.getElementById('res-wrong').textContent=state.wrong;
  document.getElementById('res-pts').textContent=state.pts;

  const grades=[[100,'🏆','WORLD CHAMPION!','Flawless! You know football inside out!'],[80,'🥇','TOP SCORER!','Incredible knowledge of the beautiful game!'],[60,'🥈','FIRST TEAM!','Solid performance, you know your football!'],[40,'🥉','SUB BENCH','Good effort! Keep watching more matches!'],[0,'📺','WARMING UP','Study more football and come back stronger!']];
  const [,emoji,title,sub]=grades.find(([min])=>pct>=min);
  document.getElementById('res-emoji').textContent=emoji;
  document.getElementById('res-title').textContent=title;
  document.getElementById('res-sub').textContent=sub;

  // Earn badges
  const newBadges=[];
  if(pct===100)newBadges.push({icon:'🏆',label:'Perfect Score',cls:'gold'});
  if(state.maxStreak>=5)newBadges.push({icon:'🔥',label:'On Fire (5 streak)',cls:'purple'});
  if(state.maxStreak>=3)newBadges.push({icon:'⚡',label:'Hat-Trick Streak',cls:'green'});
  if(state.pts>=200)newBadges.push({icon:'💎',label:'Point Machine',cls:'blue'});
  if(state.correct===tot)newBadges.push({icon:'⭐',label:'All Correct',cls:'gold'});

  const save=loadSave();
  newBadges.forEach(b=>{if(!save.achievements.includes(b.label))save.achievements.push(b.label);});

  const badgesSection=document.getElementById('badges-section');
  const badgesRow=document.getElementById('badges-row');
  if(newBadges.length>0){
    badgesSection.style.display='block';
    badgesRow.innerHTML='';
    newBadges.forEach((b,i)=>{
      const el=document.createElement('div');
      el.className=`badge ${b.cls}`;el.style.animationDelay=(i*0.15)+'s';
      el.innerHTML=`${b.icon} ${b.label}`;badgesRow.appendChild(el);
    });
  } else badgesSection.style.display='none';

  // Save to leaderboard & global stats
  save.games=(save.games||0)+1;
  save.totalPts=(save.totalPts||0)+state.pts;
  save.totalCorrect=(save.totalCorrect||0)+state.correct;
  save.totalQ=(save.totalQ||0)+tot;
  if(!save.catStats)save.catStats={};
  if(!save.catStats[state.cat])save.catStats[state.cat]={correct:0,total:0};
  save.catStats[state.cat].correct+=state.correct;
  save.catStats[state.cat].total+=tot;
  if(!save.leaderboard)save.leaderboard=[];
  save.leaderboard.push({pts:state.pts,pct,cat:state.cat,diff:state.diff,date:new Date().toLocaleDateString()});
  save.leaderboard.sort((a,b)=>b.pts-a.pts);
  save.leaderboard=save.leaderboard.slice(0,10);
  writeSave(save);

  goTo('screen-result');
  if(pct>=80)setTimeout(launchConfetti,400);
}

// ══════════════════════════════
//  LEADERBOARD
// ══════════════════════════════
function renderLeaderboard(){
  const save=loadSave();
  const list=document.getElementById('lb-list');
  if(!save.leaderboard||save.leaderboard.length===0){
    list.innerHTML='<div class="lb-empty">🏟️<br><br>No games played yet.<br>Play your first game!<br></div>';return;
  }
  list.innerHTML='';
  save.leaderboard.forEach((e,i)=>{
    const div=document.createElement('div');div.className='lb-item';div.style.animationDelay=(i*0.05)+'s';
    const rankClass=i===0?'r1':i===1?'r2':i===2?'r3':'';
    const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
    div.innerHTML=`<div class="lb-rank ${rankClass}">${medal||'#'+(i+1)}</div><div class="lb-info"><div class="lb-name">${badgeMap[e.cat]||e.cat}</div><div class="lb-meta">${e.diff} • ${e.pct}% • ${e.date}</div></div><div class="lb-pts">${e.pts}pts</div>`;
    list.appendChild(div);
  });
}

// ══════════════════════════════
//  STATS DASHBOARD
// ══════════════════════════════
function renderStats(){
  const save=loadSave();
  const acc=save.totalQ>0?Math.round(save.totalCorrect/save.totalQ*100):0;
  const grid=document.getElementById('dash-grid');
  grid.innerHTML=`
    <div class="dash-card"><div class="d-label">Games Played</div><div class="d-val">${save.games||0}</div></div>
    <div class="dash-card"><div class="d-label">Total Points</div><div class="d-val" style="color:var(--gold)">${save.totalPts||0}</div></div>
    <div class="dash-card"><div class="d-label">Accuracy</div><div class="d-val" style="color:var(--correct)">${acc}%</div></div>
    <div class="dash-card"><div class="d-label">Badges Earned</div><div class="d-val" style="color:#a78bfa">${(save.achievements||[]).length}</div></div>
  `;
  const bars=document.getElementById('cat-bars');bars.innerHTML='';
  const cats=[['players','⭐ Players'],['clubs','🏟️ Clubs'],['worldcup','🏆 World Cup'],['egypt','🇪🇬 Egypt'],['rules','📋 Rules']];
  cats.forEach(([key,label])=>{
    const s=save.catStats&&save.catStats[key];
    const pct=s&&s.total>0?Math.round(s.correct/s.total*100):0;
    const row=document.createElement('div');row.className='cat-bar-row';
    row.innerHTML=`<div class="cat-bar-name">${label}</div><div class="cat-bar-track"><div class="cat-bar-fill" style="width:0%" data-w="${pct}"></div></div><div class="cat-bar-pct">${pct}%</div>`;
    bars.appendChild(row);
  });
  setTimeout(()=>{document.querySelectorAll('.cat-bar-fill').forEach(el=>el.style.width=el.dataset.w+'%');},100);
}

// ══════════════════════════════
//  PLAY AGAIN / HOME
// ══════════════════════════════
function playAgain(){startQuiz();}

// ══════════════════════════════
//  INIT
// ══════════════════════════════
checkDaily();