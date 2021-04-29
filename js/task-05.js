// Условие - или текст "незнакомец", или то, что вводит пользователь


const refs = {
    inputEl: document.querySelector('input#name-input'),
    spanEl: document.querySelector('span#name-output'),
}

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange (event) {

    if(refs.inputEl.value === '') {
        refs.spanEl.textContent = 'незнакомец';
    } else {
        refs.spanEl.textContent = event.currentTarget.value;
    }
}


