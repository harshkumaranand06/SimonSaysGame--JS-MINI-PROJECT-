// Audio Context for sound effects
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to create and play a tone
function playSound(frequency, duration = 0.3) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Sound frequencies for each color
const sounds = {
    red: 329.63,    // E4
    green: 261.63,  // C4
    yellow: 392.00, // G4
    purple: 493.88  // B4
};

// Game variables
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let max = 0;

// DOM elements
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let btns = ["red", "green", "yellow", "purple"];

// Start game on keypress
document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("The game has started");
        started = true;
        levelUP();
    }
});

// Flash animation for buttons
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

// Level up function
function levelUP() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    // Play sound and flash
    playSound(sounds[randColor]);
    btnFlash(randBtn);
}

// Check answer
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUP, 1000);
        }
    } else {
        // Game over
        h3.innerText = `Game Over! Your score is ${level}. Press any key to start.`;
        
        // Update high score
        if (max < level) {
            max = level;
            h2.innerText = `Highest Score = ${max}`;
        }
        
        // Game over effects
        playGameOverSound();
        document.querySelector("body").style.backgroundColor = "#ff0055";
        document.querySelector("body").classList.add("gameOver");
        
        setTimeout(function() {
            document.querySelector("body").style.background = "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)";
            document.querySelector("body").classList.remove("gameOver");
        }, 500);
        
        resetGame();
    }
}

// Game over sound effect
function playGameOverSound() {
    const frequencies = [400, 350, 300, 250, 200];
    frequencies.forEach((freq, index) => {
        setTimeout(() => {
            playSound(freq, 0.15);
        }, index * 100);
    });
}

// Button press handler
let allBtns = document.querySelectorAll(".box");

function btnPress() {
    let btn = this;
    console.log(this);
    
    btnFlash(btn);
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    // Play sound for user click
    playSound(sounds[userColor]);
    
    checkAns(userSeq.length - 1);
}

// Add click listeners to all buttons
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Reset game
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
