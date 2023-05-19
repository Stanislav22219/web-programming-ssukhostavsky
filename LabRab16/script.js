'use strict'


//Завдання 1.1
document.getElementById("img1").onclick = function() {imgsrc1()};

function imgsrc1() {
    alert('"image/img1.png"');
}

document.getElementById("img2").onclick = function() {imgsrc2()};

function imgsrc2() {
    alert('"image/img2.png"');
}

document.getElementById("img3").onclick = function() {imgsrc3()};

function imgsrc3() {
    alert('"image/img3.png"');
}


//Завдання 1.2
let a1 = document.getElementById('a1');
a1.addEventListener("mouseover",titleWrite1);
function titleWrite1() {
    document.title = a1.innerHTML;
    a1.removeEventListener("mouseover",titleWrite1);
}

let a2 = document.getElementById('a2');
a2.addEventListener("mouseover",titleWrite2);
function titleWrite2() {
    document.title = a2.innerHTML;
    a2.removeEventListener("mouseover",titleWrite2);
}

let a3 = document.getElementById('a3');
a3.addEventListener("mouseover",titleWrite3);
function titleWrite3() {
    document.title = a3.innerHTML;
    a3.removeEventListener("mouseover",titleWrite3);
}



//Завдання 1.3,4
let h1 = document.getElementById('h1');
h1.addEventListener("mouseover",afterWrite1);
h1.addEventListener("mouseout",afterClear1);
function afterWrite1() {
    h1.innerHTML+='('+h1.getAttribute("href")+')';
    h1.removeEventListener("mouseover",afterWrite1);
}
function afterClear1() {
    h1.innerHTML=h1.innerHTML.replace('('+h1.getAttribute("href")+')', '');
    h1.removeEventListener("mouseout",afterClear1);
}


let h2 = document.getElementById('h2');
h2.addEventListener("mouseover",afterWrite2);
h2.addEventListener("mouseout",afterClear2);
function afterWrite2() {
    h2.innerHTML+='('+h2.getAttribute("href")+')';
    h2.removeEventListener("mouseover",afterWrite2);
}
function afterClear2() {
    h2.innerHTML=h2.innerHTML.replace('('+h2.getAttribute("href")+')', '');
    h2.removeEventListener("mouseout",afterClear2);
}


let h3 = document.getElementById('h3');
h3.addEventListener("mouseover",afterWrite3);
h3.addEventListener("mouseout",afterClear3);
function afterWrite3() {
    h3.innerHTML+='('+h3.getAttribute("href")+')';
    h3.removeEventListener("mouseover",afterWrite3);
}
function afterClear3() {
    h3.innerHTML=h3.innerHTML.replace('('+h3.getAttribute("href")+')', '');
    h3.removeEventListener("mouseout",afterClear3);
}


//Завдання 1.5,6
let inputText1 = document.getElementById('inputText1');
inputText1.addEventListener('blur',valueOut1); 
function valueOut1(){
    document.getElementById('demo').innerHTML = inputText1.value;
}
inputText1.addEventListener('click',alertValue1);
function alertValue1(){
    alert(inputText1.value);
    inputText1.removeEventListener('click',alertValue1);
}

let inputText2 = document.getElementById('inputText2');
inputText2.addEventListener('blur',valueOut2); 
function valueOut2(){
    document.getElementById('demo').innerHTML = inputText2.value;
}
inputText2.addEventListener('click',alertValue2);
function alertValue2(){
    alert(inputText2.value);
    inputText2.removeEventListener('click',alertValue2);
}

let inputText3 = document.getElementById('inputText3');
inputText3.addEventListener('blur',valueOut3); 
function valueOut3(){
    document.getElementById('demo').innerHTML = inputText3.value;
}
inputText3.addEventListener('click',alertValue3);
function alertValue3(){
    alert(inputText3.value);
    inputText3.removeEventListener('click',alertValue3);
}



//Завдання 1.7
let p1 = document.getElementById('p1');
p1.addEventListener("click", sqrt1);
function sqrt1(){
    p1.innerHTML+='^2='+Math.pow(p1.innerHTML, 2);
}

let p2 = document.getElementById('p2');
p2.addEventListener("click", sqrt2);
function sqrt2(){
    p2.innerHTML+='^2='+Math.pow(p2.innerHTML, 2);
}

let p3 = document.getElementById('p3');
p3.addEventListener("click", sqrt3);
function sqrt3(){
    p3.innerHTML+='^2='+Math.pow(p3.innerHTML, 2);
}



//Завдання 1.8
let input1 = document.getElementById('input1');
input1.addEventListener("blur", check1);
function check1(){
    if (input1.value.length==input1.getAttribute('maxlength')){
        input1.style.border = 'solid';
        input1.style.borderColor = 'green';
    } else {
        input1.style.border = 'solid';
        input1.style.borderColor = 'red';
    }
}

let input2 = document.getElementById('input2');
input2.addEventListener("blur", check2);
function check2(){
    if (input2.value.length > 3 && input2.value.length <= 20){
        input2.style.border = 'solid';
        input2.style.borderColor = 'green';
    } else {
        input2.style.border = 'solid';
        input2.style.borderColor = 'red';
    }
}

let input3 = document.getElementById('input3');
input3.addEventListener("blur", check3);
function check3(){
    if (input3.value.length==input3.getAttribute('maxlength')){
        input3.style.border = 'solid';
        input3.style.borderColor = 'green';
    } else {
        input3.style.border = 'solid';
        input3.style.borderColor = 'red';
    }
}



//Завдання 2
let div1 = document.getElementById('div1');
div1.addEventListener("click", fill1);
function fill1(){
    div1.style.backgroundColor = 'red';
    div1.removeEventListener("click", fill1);
    div1.addEventListener("click", return1);
}
function return1(){
    div1.style.backgroundColor = 'green';
    div1.removeEventListener("click", return1);
    div1.addEventListener("click", fill1);
}

let div2 = document.getElementById('div2');
div2.addEventListener("click", fill2);
function fill2(){
    div2.style.backgroundColor = 'red';
    div2.removeEventListener("click", fill2);
    div2.addEventListener("click", return2);
}
function return2(){
    div2.style.backgroundColor = 'green';
    div2.removeEventListener("click", return2);
    div2.addEventListener("click", fill2);
}

let div3 = document.getElementById('div3');
div3.addEventListener("click", fill3);
function fill3(){
    div3.style.backgroundColor = 'red';
    div3.removeEventListener("click", fill3);
    div3.addEventListener("click", return3);
}
function return3(){
    div3.style.backgroundColor = 'green';
    div3.removeEventListener("click", return3);
    div3.addEventListener("click", fill3);
}