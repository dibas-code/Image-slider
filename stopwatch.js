
const timer = document.querySelector('#timer');
const start = document.querySelector('.Start');
const reset = document.querySelector('.Reset');

let active = false;
let [ss, mm, hh] = [0, 0, 0];
let interval = 0;

const setTimer = () => {
    hh = String(hh).padStart(2, '0');
    mm = String(mm).padStart(2, '0');
    ss = String(ss).padStart(2, '0');
}

function watchCount() {
    ss++;
    if (ss > 59) {
        ss = 0;
        mm++;
        if (mm > 59) {
            mm = 0;
            hh++;
        }
    }
    setTimer();
    timer.textContent = `${hh}:${mm}:${ss}`;
}

start.addEventListener('click', () => {
    active = !active;
    if (active) {
        start.textContent = "Stop";
        start.classList.add('active');
        interval = setInterval(watchCount, 100); // Pass reference to watchCount
    } else {
        start.textContent = "Start";
        start.classList.add('active');
        clearInterval(interval);
    }
});

reset.addEventListener('click', () => {
    hh = 0;
    mm = 0;
    ss = 0;
    setTimer()
    timer.textContent = `${hh}:${mm}:${ss}`;
    start.classList.remove('active');
})
