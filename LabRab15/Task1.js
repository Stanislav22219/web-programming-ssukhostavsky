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