'use strict'

document.getElementById('date').addEventListener("click", date);
const f = new Intl.DateTimeFormat("uk-eu", {
    timeStyle: "medium",
    dateStyle: "full",
});
function date(){
    console.log(f.format(new Date()));
}