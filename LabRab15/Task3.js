'use strict';

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