

const targetBtnDec = document.querySelector('button[data-action="decrement"]');
const targetBtnIncr = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector('span');



targetBtnDec.addEventListener('click', decrement);

targetBtnIncr.addEventListener('click', increment);


function increment(event) {
     counterValue.textContent = Number(counterValue.textContent) + 1;

}

function decrement (event) {
    counterValue.textContent = Number(counterValue.textContent) - 1;

}

