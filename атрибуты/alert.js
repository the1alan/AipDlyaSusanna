let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
console.log(elem1);
console.log(elem2);
console.log(elem3);
console.log("следующее задание");

let block1 = document.querySelector('#block p');
console.log(block1);
console.log("следующее задание");

let block2 = document.querySelector('.block p');
console.log(block2);
console.log("следующее задание");

let www1 = document.querySelector('.www');
console.log(www1);
console.log("следующее задание");

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
button1.addEventListener('click', function() { console.log(1); });
button2.addEventListener('click', function() { console.log(2); });
button3.addEventListener('click', function() { console.log(3); });
console.log("следующее задание");

function func1() { console.log(1); }
function func2() { console.log(2); }
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
button4.addEventListener('click', func1);
button5.addEventListener('click', func2);
console.log("следующее задание");

function func3() { console.log('message'); }
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
let elem6 = document.querySelector('#elem6');
let elem7 = document.querySelector('#elem7');
let elem8 = document.querySelector('#elem8');
elem4.addEventListener('click', func3);
elem5.addEventListener('click', func3);
elem6.addEventListener('click', func3);
elem7.addEventListener('click', func3);
elem8.addEventListener('click', func3);
console.log("следующее задание");

function func4() { console.log('1'); }
function func5() { console.log('2'); }
function func6() { console.log('3'); }
let elem9 = document.querySelector('#elem9');
elem9.addEventListener('click', func4);
elem9.addEventListener('click', func5);
elem9.addEventListener('click', func6);
console.log("следующее задание");

let button6 = document.querySelector('#button6');
button6.addEventListener('dblclick', function() { console.log('dblclick'); });
console.log("следующее задание");

let button7 = document.querySelector('#button7');
button7.addEventListener('mouseover', function() { console.log('mouseover'); });
console.log("следующее задание");

let button8 = document.querySelector('#button8');
button8.addEventListener('mouseout', function() { console.log('mouseout'); });
console.log("следующее задание");

let button9 = document.querySelector('#button9');
button9.addEventListener('mouseover', function() { console.log('over'); });
button9.addEventListener('mouseout', function() { console.log('out'); });
console.log("следующее задание");

let elem10 = document.querySelector('#elem10');
let button10 = document.querySelector('#button10');
button10.addEventListener('click', function() { console.log(elem10.textContent); });
console.log("следующее задание");

let elem11 = document.querySelector('#elem11');
let button11 = document.querySelector('#button11');
button11.addEventListener('click', function() { elem11.textContent = 'new text'; });
console.log("следующее задание");

let elem12 = document.querySelector('#elem12');
let elem13 = document.querySelector('#elem13');
let button12 = document.querySelector('#button12');
button12.addEventListener('click', function() { 
    let sum = Number(elem12.textContent) + Number(elem13.textContent);
    console.log(sum);
});
console.log("следующее задание");

let elem14 = document.querySelector('#elem14');
let elem15 = document.querySelector('#elem15');
let elem16 = document.querySelector('#elem16');
let result1 = document.querySelector('#result1');
let button13 = document.querySelector('#button13');
button13.addEventListener('click', function() { 
    let sum = Number(elem14.textContent) + Number(elem15.textContent) + Number(elem16.textContent);
    result1.textContent = sum;
});
console.log("следующее задание");

let elem17 = document.querySelector('#elem17');
let button14 = document.querySelector('#button14');
button14.addEventListener('click', function() { 
    elem17.textContent = Number(elem17.textContent) + 1;
});
console.log("следующее задание");

let elem18 = document.querySelector('#elem18');
let button15 = document.querySelector('#button15');
button15.addEventListener('click', function() { 
    elem18.textContent += '!';
});
console.log("следующее задание");

let elem19 = document.querySelector('#elem19');
let button16 = document.querySelector('#button16');
button16.addEventListener('click', function() { 
    console.log(elem19.innerHTML);
});
console.log("следующее задание");

let elem20 = document.querySelector('#elem20');
let button17 = document.querySelector('#button17');
button17.addEventListener('click', function() { 
    elem20.innerHTML = '<b>new text</b>';
});
console.log("следующее задание");

let elem21 = document.querySelector('#elem21');
let button18 = document.querySelector('#button18');
button18.addEventListener('click', function() { 
    console.log(elem21.type);
});
console.log("следующее задание");

let elem22 = document.querySelector('#elem22');
let button19 = document.querySelector('#button19');
button19.addEventListener('click', function() { 
    elem22.type = 'submit';
});
console.log("следующее задание");

let link1 = document.querySelector('#link1');
let button20 = document.querySelector('#button20');
let result2 = document.querySelector('#result2');
button20.addEventListener('click', function() { 
    result2.textContent = link1.href;
});
console.log("следующее задание");

let link2 = document.querySelector('#link2');
let button21 = document.querySelector('#button21');
button21.addEventListener('click', function() { 
    link2.textContent += ' (' + link2.href + ')';
});
console.log("следующее задание");

let image1 = document.querySelector('#image1');
let button22 = document.querySelector('#button22');
let result3 = document.querySelector('#result3');
button22.addEventListener('click', function() { 
    result3.textContent = image1.src;
});
console.log("следующее задание");

let image2 = document.querySelector('#image2');
let button23 = document.querySelector('#button23');
button23.addEventListener('click', function() { 
    image2.width = 300;
});
console.log("следующее задание");

let image3 = document.querySelector('#image3');
let button24 = document.querySelector('#button24');
button24.addEventListener('click', function() { 
    image3.width = image3.width * 2;
});
console.log("следующее задание");

let image4 = document.querySelector('#image4');
let button25 = document.querySelector('#button25');
let button26 = document.querySelector('#button26');
button25.addEventListener('click', function() { 
    image4.src = 'image1.jpg';
});
button26.addEventListener('click', function() { 
    image4.src = 'image2.jpg';
});
console.log("следующее задание");

let input1 = document.querySelector('#input1');
let button27 = document.querySelector('#button27');
button27.addEventListener('click', function() { 
    input1.value = 'some text';
});
console.log("следующее задание");

let input2 = document.querySelector('#input2');
let button28 = document.querySelector('#button28');
let result4 = document.querySelector('#result4');
button28.addEventListener('click', function() { 
    result4.textContent = input2.value;
});
console.log("следующее задание");

let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');
let button29 = document.querySelector('#button29');
button29.addEventListener('click', function() { 
    input4.value = Number(input3.value) ** 2;
});
console.log("следующее задание");

let input5 = document.querySelector('#input5');
let input6 = document.querySelector('#input6');
let button30 = document.querySelector('#button30');
button30.addEventListener('click', function() { 
    let temp = input5.value;
    input5.value = input6.value;
    input6.value = temp;
});
console.log("следующее задание");

let input7 = document.querySelector('#input7');
let input8 = document.querySelector('#input8');
let input9 = document.querySelector('#input9');
let input10 = document.querySelector('#input10');
let input11 = document.querySelector('#input11');
let button31 = document.querySelector('#button31');
let result5 = document.querySelector('#result5');
button31.addEventListener('click', function() { 
    let sum = Number(input7.value) + Number(input8.value) + Number(input9.value) + Number(input10.value) + Number(input11.value);
    result5.textContent = sum / 5;
});
console.log("следующее задание");

let input12 = document.querySelector('#input12');
let button32 = document.querySelector('#button32');
input12.addEventListener('focus', function() { 
    input12.value = 1;
});
input12.addEventListener('blur', function() { 
    input12.value = 2;
});
console.log("следующее задание");

let input13 = document.querySelector('#input13');
let button33 = document.querySelector('#button33');
input13.addEventListener('blur', function() { 
    console.log(Number(input13.value) ** 2);
});
console.log("следующее задание");

let input14 = document.querySelector('#input14');
let button34 = document.querySelector('#button34');
input14.addEventListener('focus', function() { 
    input14.value = '';
});
console.log("следующее задание");

let elem23 = document.querySelector('#elem23');
let button35 = document.querySelector('#button35');
button35.addEventListener('click', function() { 
    console.log(elem23.className);
});
console.log("следующее задание");

let elem24 = document.querySelector('#elem24');
let button36 = document.querySelector('#button36');
button36.addEventListener('click', function() { 
    elem24.className = 'new-class';
});
console.log("следующее задание");

let elem25 = document.querySelector('#elem25');
let button37 = document.querySelector('#button37');
button37.addEventListener('click', function() { 
    console.log(elem25.className.split(' '));
});
console.log("следующее задание");

console.log(document.querySelector('#image5').src);
console.log("следующее задание");

let image6 = document.querySelector('#image6');
console.log(image6.src);
console.log(image6.width);
console.log(image6.height);
console.log("следующее задание");

let input15 = document.querySelector('#input15');
let button38 = document.querySelector('#button38');
input15.addEventListener('focus', function() { 
    this.value = 1;
});
input15.addEventListener('blur', function() { 
    this.value = 2;
});
console.log("следующее задание");

let button39 = document.querySelector('#button39');
button39.addEventListener('click', function() { 
    this.value = Number(this.value) + 1;
});
console.log("следующее задание");

let elems26_30 = document.querySelectorAll('#elem26, #elem27, #elem28, #elem29, #elem30');
for (let elem of elems26_30) {
    elem.addEventListener('click', function() { 
        this.textContent += '!';
    });
}
console.log("следующее задание");

let inputs16_18 = document.querySelectorAll('#input16, #input17, #input18');
for (let input of inputs16_18) {
    input.addEventListener('blur', function() { 
        this.value = Number(this.value) ** 2;
    });
}
console.log("следующее задание");

let task46 = document.querySelectorAll('.task46');
let button40 = document.querySelector('#button40');
button40.addEventListener('click', function() { 
    for (let elem of task46) {
        elem.textContent = 'text';
    }
});
console.log("следующее задание");

let task47 = document.querySelectorAll('.task47');
let button41 = document.querySelector('#button41');
button41.addEventListener('click', function() { 
    let i = 1;
    for (let elem of task47) {
        elem.textContent += i;
        i++;
    }
});
console.log("следующее задание");

let task48 = document.querySelectorAll('.task48');
for (let input of task48) {
    input.addEventListener('blur', function() { 
        this.value = Number(this.value) + 1;
    });
}
console.log("следующее задание");

let task49 = document.querySelectorAll('.task49');
for (let elem of task49) {
    elem.addEventListener('click', function() { 
        this.textContent = Number(this.textContent) ** 2;
    });
}
console.log("следующее задание");

let task50 = document.querySelectorAll('.task50');
for (let div of task50) {
    div.addEventListener('click', function() { 
        this.textContent = Number(this.textContent) + 1;
    });
}
console.log("следующее задание");

let link3 = document.querySelector('#link3');
let button42 = document.querySelector('#button42');
button42.addEventListener('click', function func() { 
    link3.textContent += ' (' + link3.href + ')';
    this.removeEventListener('click', func);
});
console.log("следующее задание");

let button43 = document.querySelector('#button43');
button43.addEventListener('click', function func() { 
    this.value = Number(this.value) + 1;
    if (this.value >= 10) {
        this.removeEventListener('click', func);
    }
});
console.log("следующее задание");

let task53 = document.querySelectorAll('.task53');
for (let elem of task53) {
    elem.addEventListener('click', function func() { 
        this.textContent += '!';
        this.removeEventListener('click', func);
    });
}
console.log("следующее задание");

let list1 = document.querySelectorAll('#list1 li');
for (let li of list1) {
    li.addEventListener('click', function func() { 
        this.textContent = Number(this.textContent) + 1;
    });
}
console.log("следующее задание");

let list2 = document.querySelectorAll('#list2 li');
for (let li of list2) {
    li.addEventListener('click', function func() { 
        this.textContent = Number(this.textContent) + 1;
        this.removeEventListener('click', func);
    });
}
console.log("следующее задание");

let list3 = document.querySelectorAll('#list3 li');
for (let li of list3) {
    li.addEventListener('click', function func() { 
        if (Number(this.textContent) < 10) {
            this.textContent = Number(this.textContent) + 1;
        }
    });
}
console.log("следующее задание");

let list4 = document.querySelectorAll('#list4 li');
let sum57 = 0;
for (let li of list4) {
    let year = li.textContent;
    let digitSum = 0;
    for (let char of year) {
        digitSum += Number(char);
    }
    if (digitSum === 6) {
        sum57 += Number(year);
    }
}
console.log(sum57);
console.log("следующее задание");

let task58 = document.querySelectorAll('.task58');
for (let elem of task58) {
    elem.textContent += '!';
}
console.log("следующее задание");

let task59 = document.querySelectorAll('.task59');
for (let elem of task59) {
    elem.addEventListener('click', function() { 
        this.textContent = Number(this.textContent) + 1;
    });
}
console.log("следующее задание");

let task60 = document.querySelector('#task60');
let button44 = document.querySelector('#button44');
button44.addEventListener('click', function() { 
    task60.innerHTML = '<b>' + task60.innerHTML + '</b>';
});
console.log("следующее задание");

let task61 = document.querySelectorAll('.task61');
let button45 = document.querySelector('#button45');
button45.addEventListener('click', function() { 
    let sum = 0;
    for (let elem of task61) {
        sum += Number(elem.textContent);
    }
    console.log(sum);
});
console.log("следующее задание");

let task62 = document.querySelectorAll('.task62');
for (let elem of task62) {
    elem.addEventListener('click', function() { 
        this.textContent += '!';
    });
}
console.log("следующее задание");

let task63 = document.querySelectorAll('.task63');
let button46 = document.querySelector('#button46');
button46.addEventListener('click', function() { 
    for (let elem of task63) {
        elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
    }
});
console.log("следующее задание");

let task64 = document.querySelectorAll('.task64');
let button47 = document.querySelector('#button47');
let sum64 = 0;
for (let elem of task64) {
    sum64 += Number(elem.textContent);
}
button47.addEventListener('click', function() { 
    console.log(sum64);
});
console.log("следующее задание");

let task65 = document.querySelectorAll('.task65');
let button48 = document.querySelector('#button48');
let sum65 = 0;
for (let input of task65) {
    sum65 += Number(input.value);
}
button48.addEventListener('click', function() { 
    console.log(sum65);
});
console.log("следующее задание");

let inp66_1 = document.querySelector('#inp66_1');
let inp66_2 = document.querySelector('#inp66_2');
let inp66_3 = document.querySelector('#inp66_3');
let button49 = document.querySelector('#button49');
button49.addEventListener('click', function() { 
    inp66_3.value = inp66_1.value + inp66_2.value;
});
console.log("следующее задание");

let inp67_1 = document.querySelector('#inp67_1');
let inp67_2 = document.querySelector('#inp67_2');
let res67 = document.querySelector('#res67');
let button50 = document.querySelector('#button50');
button50.addEventListener('click', function() { 
    res67.textContent = Number(inp67_1.value) + Number(inp67_2.value);
});
console.log("следующее задание");

let task68 = document.querySelectorAll('.task68');
let button51 = document.querySelector('#button51');
button51.addEventListener('click', function() { 
    for (let input of task68) {
        if (input.value === input.dataset.text) {
            input.classList.add('right');
        } else {
            input.classList.add('wrong');
        }
    }
});
console.log("следующее задание");

let task69 = document.querySelectorAll('.task69');
let button52 = document.querySelector('#button52');
let texts69 = ['text1', 'text2', 'text3'];
button52.addEventListener('click', function() { 
    for (let i = 0; i < task69.length; i++) {
        if (task69[i].value === texts69[i]) {
            task69[i].classList.add('right');
        } else {
            task69[i].classList.add('wrong');
        }
    }
});
console.log("следующее задание");

let task70 = document.querySelectorAll('.task70');
let button53 = document.querySelector('#button53');
let sum70 = 0;
button53.addEventListener('click', function() { 
    for (let input of task70) {
        sum70 += Number(input.value);
    }
    console.log(sum70);
});
console.log("следующее задание");

let inp71_1 = document.querySelector('#inp71_1');
let inp71_2 = document.querySelector('#inp71_2');
let inp71_3 = document.querySelector('#inp71_3');
let button54 = document.querySelector('#button54');
let sum71 = Number(inp71_1.value) + Number(inp71_2.value);
button54.addEventListener('click', function() { 
    inp71_3.value = sum71;
});
console.log("следующее задание");

let inp72 = document.querySelector('#inp72');
inp72.addEventListener('blur', function() { 
    let digits = this.value.split('').map(Number);
    let sum72 = 0;
    for (let digit of digits) {
        sum72 += digit;
    }
    console.log(sum72);
});
console.log("следующее задание");