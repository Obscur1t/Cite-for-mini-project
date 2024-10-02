const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');
let interval;
let count = 0;

startBtn.addEventListener('click', () => {
    interval =  setInterval(() => {
        count += 1
        timer.textContent = count + 's'
    }, 1000)
})

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
})

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    count = 0;
    timer.textContent = 0;
})