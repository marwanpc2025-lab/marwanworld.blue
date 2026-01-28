// ===== كلمات اللعبة =====
const words = ["تفاحة","كرة","قلم","كتاب","موز","سيارة"];

let players = [];
let spyIndex = 0;
let currentPlayer = 0;
let randomWord = "";

// ===== بدء اللعبة =====
function startBakasa(){
  const p1 = document.getElementById("player1").value.trim();
  const p2 = document.getElementById("player2").value.trim();
  const p3 = document.getElementById("player3").value.trim();

  if(!p1 || !p2 || !p3){
    alert("اكتب أسماء 3 لاعبين على الأقل");
    return;
  }

  players = [p1, p2, p3];
  randomWord = words[Math.floor(Math.random()*words.length)];
  spyIndex = Math.floor(Math.random()*players.length);
  currentPlayer = 0;

  document.getElementById("namesInput").style.display = "none";
  document.getElementById("instructionBox").style.display = "block";

  showInstruction();
}

// ===== عرض المهمة =====
function showInstruction(){
  const name = players[currentPlayer];
  let message = "";

  if(currentPlayer === spyIndex){
    message = ${name}: أنت النصاب! حاول تخمين الكلمة بدون ما تعرفها.;
  } else {
    message = ${name}: الكلمة هي "${randomWord}".;
  }

  document.getElementById("playerInstruction").textContent = message;
}

// ===== التالي =====
function nextPlayer(){
  currentPlayer++;
  if(currentPlayer >= players.length){
    document.getElementById("playerInstruction").textContent = "🕹️ كل اللاعبين شاهدوا مهمتهم! الآن يمكن اللعب.";
    document.getElementById("nextBtn").style.display = "none";
    return;
  }
  showInstruction();
}

// ===== ربط الأزرار =====
document.getElementById("startBtn").addEventListener("click", startBakasa);
document.getElementById("nextBtn").addEventListener("click", nextPlayer);