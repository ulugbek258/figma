// DOM elementlari
const character = document.querySelector('.character');
const leftArm = document.querySelector('.left-arm');
const rightArm = document.querySelector('.right-arm');
const leftLeg = document.querySelector('.left-leg');
const rightLeg = document.querySelector('.right-leg');

// Tugmalarni olish
const jumpBtn = document.getElementById('jumpBtn');
const runBtn = document.getElementById('runBtn');

// Character jump function
jumpBtn.addEventListener('click', () => {
    character.style.animation = 'jump 0.5s ease-out';
    setTimeout(() => {
        character.style.animation = ''; // Animatsiyani to'xtatish
    }, 500);
});

// Character run function
runBtn.addEventListener('click', () => {
    character.style.animation = 'run 1s infinite linear';
});
