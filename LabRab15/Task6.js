'use strict';

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