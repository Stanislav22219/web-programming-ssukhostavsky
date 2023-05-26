'use strict'

$(document).ready(game)
$(document).ready(randomImages)

function game(){
    let wrapper = $("<div>").addClass("wrapper");
    let tbl = $("<table>").attr("id", "tbl1").addClass("table");
    let tr1 = $("<tr>").append($("<td>").attr("id", "1"))
                        .append($("<td>").attr("id", "2"))
                        .append($("<td>").attr("id", "3"))
                        .append($("<td>").attr("id", "4"))
                        .append($("<td>").attr("id", "5"));
    
    let tr2 = $("<tr>").append($("<td>").attr("id", "6"))
                        .append($("<td>").attr("id", "7"))
                        .append($("<td>").attr("id", "8"))
                        .append($("<td>").attr("id", "9"))
                        .append($("<td>").attr("id", "10"));

    let tr3 = $("<tr>").append($("<td>").attr("id", "11"))
                        .append($("<td>").attr("id", "12"))
                        .append($("<td>").attr("id", "13"))
                        .append($("<td>").attr("id", "14"))
                        .append($("<td>").attr("id", "15"));

    let tr4 = $("<tr>").append($("<td>").attr("id", "16"))
                        .append($("<td>").attr("id", "17"))
                        .append($("<td>").attr("id", "18"))
                        .append($("<td>").attr("id", "19"))
                        .append($("<td>").attr("id", "20"));

    let tr5 = $("<tr>").append($("<td>").attr("id", "21"))
                        .append($("<td>").attr("id", "22"))
                        .append($("<td>").attr("id", "23"))
                        .append($("<td>").attr("id", "24"))
                        .append($("<td>").attr("id", "25"));


    let right = $("<div>").addClass("right");
    let btn = $("<button>").text("Почати з початку").attr("id", "restart");
    let img = $("<div>").attr("id", "img");



    wrapper.append(tbl);
    wrapper.append(right);
        right.append(btn);
        right.append(img);
        tbl.append(tr1);
        tbl.append(tr2);
        tbl.append(tr3);
        tbl.append(tr4);
        tbl.append(tr5);
    $(document.body).append(wrapper);
}

let i = 1;
let images = Array.from({length: 45}, (_, i) => "images/"+(i + 1) +".jpg");
function randomImages(){
    for (let p=0;p<=24;p++){
        let n = Math.floor(Math.random()*(images.length))
        $('#'+i).prepend($("<img>").attr("src", images[n]))
        //$('#img').attr("src", images[n])
        console.log(images[n])
        images.splice(n, 1);
        i++;
    }
}



/*let images=new Array()
let numbers = Array.from({length: 45}, (_, i) => i + 1);
let i = 1;
function Images(){
    for(let p=0;p<=24;p++){
        let pic=Math.floor(Math.random() * 44)+1
        console.log(pic)
        images[pic]="images/"+pic+".jpg";
      
        console.log(images[pic])
        $('#'+i).prepend($("<img>").attr("src", images[pic]));
        i++;
    }
}
function rngImages(){
    for(let p=0;p<=24;p++){
         numbers[p]=Math.floor(Math.random() * numbers.length)
    }
    
}*/