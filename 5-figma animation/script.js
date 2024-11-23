// DOM elementlarini olish
const character = document.querySelector('.character');
const jumpButton = document.getElementById('jumpBtn');
const runButton = document.getElementById('runBtn');
const stopButton = document.getElementById('stopBtn');
const obstacles = document.querySelectorAll('.obstacle');

// Qahramon sakrashi
jumpButton.addEventListener('click', function() {
    character.style.animation = 'jump 0.5s ease-out';
    setTimeout(() => {
        character.style.animation = ''; // Animatsiyani tugatish
    }, 500);
});

// Qahramon yugurishi
runButton.addEventListener('click', function() {
    character.style.animation = 'run 1s linear infinite';
});

// Qahramon to'xtashi
stopButton.addEventListener('click', function() {
    character.style.animation = ''; // Barcha animatsiyalarni to'xtatish
});

// Ob'ektlarni to'g'ri joylashtirish
let obstacleIndex = 0;
setInterval(() => {
    if (obstacleIndex < obstacles.length) {
        obstacles[obstacleIndex].style.animation = 'move-obstacles 5s infinite linear';
        obstacleIndex++;
    }
}, 1000);
