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


//Завдання 1.3
let h1 = document.getElementById('h1');
h1.addEventListener("mouseover",afterWrite1);
function afterWrite1() {
    h1.innerHTML+=h1.getAttribute("href");
    h1.removeEventListener("mouseover",afterWrite1);
}

let h2 = document.getElementById('h2');
h2.addEventListener("mouseover",afterWrite2);
function afterWrite2() {
    h2.innerHTML+=h2.getAttribute("href");
    h2.removeEventListener("mouseover",afterWrite2);
}

let h3 = document.getElementById('h3');
h3.addEventListener("mouseover",afterWrite3);
function afterWrite3() {
    h3.innerHTML+=h3.getAttribute("href");
    h3.removeEventListener("mouseover",afterWrite3);
}


//Завдання 1.4
let h12 = document.getElementById('h12');
h12.addEventListener("mouseover",afterWrite12);
h12.addEventListener("mouseout",afterClear12);
function afterWrite12() {
    h12.innerHTML+='('+h12.getAttribute("href")+')';
    h12.removeEventListener("mouseover",afterWrite12);
}
function afterClear12() {
    h12.innerHTML.remove();
    h12.removeEventListener("mouseout",afterClear12);
}


let h22 = document.getElementById('h22');
h22.addEventListener("mouseover",afterWrite22);
function afterWrite22() {
    h22.innerHTML+=h22.getAttribute("href");
    h22.removeEventListener("mouseover",afterWrite22);
}


let h32 = document.getElementById('h32');
h32.addEventListener("mouseover",afterWrite32);
function afterWrite32() {
    h32.innerHTML+=h32.getAttribute("href");
    h32.removeEventListener("mouseover",afterWrite32);
}


//Завдання 1.5
let inputText1 = document.getElementById('inputText1');
inputText1.addEventListener('blur',valueOut1); 
function valueOut1(){
    document.getElementById('demo').innerHTML = inputText1.value;
}

let inputText2 = document.getElementById('inputText2');
inputText2.addEventListener('blur',valueOut2); 
function valueOut2(){
    document.getElementById('demo').innerHTML = inputText2.value;
}

let inputText3 = document.getElementById('inputText3');
inputText3.addEventListener('blur',valueOut3); 
function valueOut3(){
    document.getElementById('demo').innerHTML = inputText3.value;
}