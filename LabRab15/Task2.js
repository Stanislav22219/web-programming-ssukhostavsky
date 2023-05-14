'use strict';

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