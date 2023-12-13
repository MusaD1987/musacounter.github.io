const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');


let count = 0;
counterDisplay.textContent = count;


function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    if (count > 0) {
        count--;
        updateDisplay();
    }

}


function reset() {
    count = 0;
    updateDisplay();
}


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);


function updateDisplay() {
    counterDisplay.textContent = count;
}