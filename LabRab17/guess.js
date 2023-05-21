'use strict'

let again = 'Спробувати ще раз?';
let reload = 'Спробувати ще раз?';
let num = parseInt((Math.random()*100)+1);
alert(num);
let guess = 0;
let difference = 0;
let count = 0;
const f = new Intl.DateTimeFormat("ua-eu", {
    timeStyle: "medium",
    dateStyle: "short",
});


window.onload = cycle();
function cycle(){
    do {
        count++;
        guess = prompt("Гра “Вгадай число”. Введіть число у діапазоні від 0 до 100");
        if(guess > num)
        {
            difference = guess - num;
        }
        else if (guess < num) {
            difference = num - guess;
        }
        if (guess == num) {
            console.log(f.format(new Date())+' Спроба '+count+': число '+guess+' - вірно')
            alert('За '+count+ ' спроб ви вгадали число ' + num);
            if (confirm(reload) == true) {
                location.reload();
            } else {
                break;
            }
        }else{


        if (guess > 100 || guess < 0 || guess === '') {
        alert('Число не відповідає діапазону. ');
        }else
        if (guess === null){
            break;
        }else


        if (difference/100 <= .05){
            console.log(f.format(new Date())+' Спроба '+count+': число '+guess+' - не вірно')
            alert("Дуже гаряче!")
        }else
        if (difference/100 <= .20){
            console.log(f.format(new Date())+' Спроба '+count+': число '+guess+' - не вірно')
            alert("Гаряче")
        }else
        if (difference/100 <= .50){
            console.log(f.format(new Date())+' Спроба '+count+': число '+guess+' - не вірно')
            alert("Холодно")
        }else{
            console.log(f.format(new Date())+' Спроба '+count+': число '+guess+' - не вірно')
            alert("Дуже холодно!");
        }
        if (confirm(again)==true){
            cycle()
        } else{break;}}
    } while (guess != num);
}