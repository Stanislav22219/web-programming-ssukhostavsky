'use strict';

function task1() {
    let isPrime = true;
    let i =2;
    while(i <= 100){
        let j=2;
        while(j < i - 1){
            if(i % j == 0){
                isPrime = false;
                break;
            }
            j++;
        }
        if(isPrime){
            document.write(i+'<br>');
        }
        isPrime = true;
        i++;
    }
}



function task2() {
    let n = 0;
    document.write(0 + " - це нуль<br>")
    do {
        n++;
        if(n % 2 === 0) {
            document.write(n + " - парне число<br>");
        }
        else {
            document.write(n + " - непарне число<br>");
        }
    } while (n < 10);
}



function task3() {
    let numb = 10000;
    let counter = 0;

    while (numb > 50) {
        numb = numb / 2;
        counter++;
        document.write(numb + '<br>');
    }
    let result = numb;
    console.log('Завдання 3');
    console.log(result);
    console.log(counter);
}



function task4() {
    let month = prompt('Введіть місяць');

    if (1 <= month <= 12) {
        if (month == 1) {
            alert('Зима, січень');
        }
        if (month == 2) {
            alert('Зима, лютий');
        }
        if (month == 3) {
            alert('Весна, березень');
        }
        if (month == 4) {
            alert('Весна, квітень');
        }
        if (month == 5) {
            alert('Весна, травень');
        }
        if (month == 6) {
            alert('Літо, червень');
        }
        if (month == 7) {
            alert('Літо, липень');
        }
        if (month == 8) {
            alert('Літо, серпень');
        }
        if (month == 9) {
            alert('Осінь, вересень');
        }
        if (month == 10) {
            alert('Осінь, жовтень');
        }
        if (month == 11) {
            alert('Осінь, листопад');
        }
        if (month == 12) {
            alert('Зима, грудень');
        }
    }
    else {
        alert('Неправильне значення')
    }
}



function task5() {
    let temp = prompt('Температура,°С');
    temp = 9 / 5 * temp + 32;
    alert('Температура: ' + temp + ' °F');
}



function task6() {
    let week = prompt('Введіть день тижня');

    switch(week) {
        case '1':
            week = "Понеділок";
            break;
        case '2':
            week = "Вівторок";
            break;
        case '3':
            week = "Середа";
            break;
        case '4':
            week = "Четвер";
            break;
        case '5':
            week = "П'ятниця";
            break;
        case '6':
            week = "Субота";
            break;
        case '7':
            week = "Неділя";
            break;
        default:
            week = "Incorrect input";
            break;
    }
    document.write(week);
}