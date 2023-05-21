'use strict'

document.getElementById('date').addEventListener("click", date);
const f = new Intl.DateTimeFormat("ua-eu", {
    timeStyle: "medium",
    dateStyle: "full",
});
function date(){
    console.log(f.format(new Date()));
}