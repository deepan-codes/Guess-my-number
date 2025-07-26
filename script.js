'use strict';
let secreateNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').textContent = '?';
  secreateNumber = Math.trunc(Math.random() * 20);
  document.querySelector('.result').textContent = 'Start guessing... ';
  document.querySelector('.number').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  let value = Number(document.querySelector('.number').value);

  if (!value) document.querySelector('.result').textContent = 'No Number 🚫';
  else if (value === secreateNumber) {
    document.querySelector('.result').textContent = 'You Win ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').textContent = value;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.h-score').textContent = highScore;
    }
  } else if (value > secreateNumber) {
    if (score > 0) {
      document.querySelector('.result').textContent = 'too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.result').textContent = 'GAME OVER 👽';
      document.querySelector('body').style.backgroundColor = '#e22b13ff';
    }
  } else if (value < secreateNumber) {
    if (score > 0) {
      document.querySelector('.result').textContent = 'too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.result').textContent = 'GAME OVER 👽';
      document.querySelector('body').style.backgroundColor = '#e22b13ff';
    }
  }
});
