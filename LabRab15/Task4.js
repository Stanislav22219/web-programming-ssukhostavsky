'use strict';

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