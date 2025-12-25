let textarea1 = document.querySelector('#textarea1');
let paragraph1 = document.querySelector('#paragraph1');
textarea1.addEventListener('blur', function() {
    paragraph1.textContent = this.value;
});
console.log("следующее задание");

let input1 = document.querySelector('#input1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
    input1.disabled = true;
});
console.log("следующее задание");

let input2 = document.querySelector('#input2');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
button2.addEventListener('click', function() {
    input2.disabled = true;
});
button3.addEventListener('click', function() {
    input2.disabled = false;
});
console.log("следующее задание");

let input3 = document.querySelector('#input3');
let button4 = document.querySelector('#button4');
button4.addEventListener('click', function() {
    console.log(input3.disabled);
});
console.log("следующее задание");

let checkbox1 = document.querySelector('#checkbox1');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
button5.addEventListener('click', function() {
    checkbox1.checked = true;
});
button6.addEventListener('click', function() {
    checkbox1.checked = false;
});
console.log("следующее задание");

let checkbox2 = document.querySelector('#checkbox2');
let button7 = document.querySelector('#button7');
let paragraph2 = document.querySelector('#paragraph2');
button7.addEventListener('click', function() {
    if (checkbox2.checked) {
        paragraph2.textContent = 'привет';
    } else {
        paragraph2.textContent = 'пока';
    }
});
console.log("следующее задание");

console.log("Код elem.disabled = !elem.disabled использует логическое отрицание для смены состояния - если было true, станет false и наоборот");
console.log("следующее задание");

let checkbox3 = document.querySelector('#checkbox3');
let button8 = document.querySelector('#button8');
button8.addEventListener('click', function() {
    checkbox3.checked = !checkbox3.checked;
});
console.log("следующее задание");

let radios = document.querySelectorAll('input[type="radio"]');
let button9 = document.querySelector('#button9');
let paragraph3 = document.querySelector('#paragraph3');
button9.addEventListener('click', function() {
    for (let radio of radios) {
        if (radio.checked) {
            paragraph3.textContent = radio.value;
        }
    }
});
console.log("следующее задание");

let input4 = document.querySelector('#input4');
let paragraph4 = document.querySelector('#paragraph4');
input4.addEventListener('change', function() {
    paragraph4.textContent = this.value;
});
console.log("следующее задание");

let checkbox4 = document.querySelector('#checkbox4');
let paragraph5 = document.querySelector('#paragraph5');
checkbox4.addEventListener('change', function() {
    paragraph5.textContent = this.checked;
});
console.log("следующее задание");

console.log("Событие blur происходит при потере фокуса, а change - при изменении значения и потере фокуса");
console.log("следующее задание");

let input5 = document.querySelector('#input5');
input5.addEventListener('change', function() {
    if (this.value.length < 5) {
        this.classList.add('green-border');
        this.classList.remove('red-border');
    } else {
        this.classList.add('red-border');
        this.classList.remove('green-border');
    }
});
console.log("следующее задание");

let input6 = document.querySelector('#input6');
input6.addEventListener('input', function() {
    if (this.value.length === 5) {
        console.log('Достигнуто 5 символов');
    }
});
console.log("следующее задание");

let input7 = document.querySelector('#input7');
let input8 = document.querySelector('#input8');
let paragraph7 = document.querySelector('#paragraph7');
input7.addEventListener('input', function() {
    if (this.value.length === 2) {
        input8.focus();
    }
});
input8.addEventListener('input', function() {
    let remaining = 5 - this.value.length;
    if (remaining >= 0) {
        paragraph7.textContent = 'Осталось символов: ' + remaining;
    } else {
        paragraph7.textContent = 'Превышено на: ' + Math.abs(remaining);
    }
    if (this.value.length === 2) {
        this.blur();
    }
});
console.log("следующее задание");

let textarea2 = document.querySelector('#textarea2');
let div1 = document.querySelector('#div1');
textarea2.addEventListener('blur', function() {
    div1.textContent = this.value;
});
console.log("следующее задание");

let checkbox5 = document.querySelector('#checkbox5');
let button10 = document.querySelector('#button10');
let div2 = document.querySelector('#div2');
button10.addEventListener('click', function() {
    if (checkbox5.checked) {
        div2.textContent = '111';
    } else {
        div2.textContent = '222';
    }
});
console.log("следующее задание");

let checkbox6 = document.querySelector('#checkbox6');
let button11 = document.querySelector('#button11');
button11.addEventListener('click', function() {
    if (checkbox6.checked === true) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
console.log("следующее задание");