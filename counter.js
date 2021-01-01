let value = document.getElementById('value');
let count = 0;
const decrease = document.getElementsByClassName('decrease')[0];
const reset = document.getElementsByClassName('reset')[0];
const increase = document.getElementsByClassName('increase')[0];

decrease.addEventListener('click', decreaseFunc);
reset.addEventListener('click', resetFunc);
increase.addEventListener('click', increaseFunc);

function decreaseFunc() {
    count--;
    value.textContent = count;
    if(count < 0)
        value.style.color = 'red';
    if(count == 0)
        value.style.color = 'black';
}

function resetFunc() {
    count = 0;
    value.textContent = count;
    value.style.color = 'black';
}

function increaseFunc() {
    count++;
    value.textContent = count;
    if(count > 0)
        value.style.color = 'green';
    if(count == 0)
        value.style.color = 'black';
}