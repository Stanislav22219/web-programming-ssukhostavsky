'use strict'


$(document.body).css("display","flex")
                .css("height","100vh")
                .css("justify-content","center")
                .css("align-items","center")
                .css("color","white")
                .css("box-sizing","border-box")
                .css("padding","0")
                .css("margin","0")
                .css("font-weight","100")
                .css("font-family","Arial")

let wrapper = $("<div>")
    wrapper.css("display","flex")
            .css("flex-wrap","wrap")
        
            .css("background-color","black")
            .css("gap","3%")
            .css("padding","1%")
            .css("justify-content","center")

let input = $("<input>").addClass("input")
                        .css("width","100%")
                        .css("height","20%")
                        .css("border","0")
                        .css("background-color","black")
                        .css("color","white")
                        .css("font-size","3em")
                        .css("padding-left","5%")
                        .css("padding-right","5%")
                        .css("text-align","right")

$(document.body).append(wrapper);
wrapper.append(input)
for (let p=1;p<=19;p++){
    wrapper.append(($("<div>").attr("id",p)
                                .css("width","100px")
                                .css("height","100px")
                                .css("align-items","center")
                                .css("justify-content","center")
                                .css("display","flex"))
                                .css("border-radius","100em")
                                .css("background-color","#2c2c2c")
                                .css("font-size","3em")
                                .append($("<span>")))
}
for (let p=1;p<=3;p++){
    $("#"+p).css("background-color","#afafaf")
            .css("color","black")
}
for (let i=4;i<=16;i+=4){
    $("#"+i).css("background-color","royalblue")
}

$("#19").css("background-color","royalblue")

$("#1").text("AC").click(function(){$(".input").val("")})
$("#2").text("+/-").click(function(){$(".input").val($(".input").val()*(-1))})
$("#3").text("%").click(function(){$(".input").val($(".input").val()*0.01)})
$("#4").text("÷").click(function(){$(".input").val($(".input").val()+"/")})
$("#5").text("7").click(function(){$(".input").val($(".input").val()+7)})
$("#6").text("8").click(function(){$(".input").val($(".input").val()+8)})
$("#7").text("9").click(function(){$(".input").val($(".input").val()+9)})
$("#8").text("×").click(function(){$(".input").val($(".input").val()+"*")})
$("#9").text("4").click(function(){$(".input").val($(".input").val()+4)})
$("#10").text("5").click(function(){$(".input").val($(".input").val()+5)})
$("#11").text("6").click(function(){$(".input").val($(".input").val()+6)})
$("#12").text("-").click(function(){$(".input").val($(".input").val()+"-")})
$("#13").text("1").click(function(){$(".input").val($(".input").val()+1)})
$("#14").text("2").click(function(){$(".input").val($(".input").val()+2)})
$("#15").text("3").click(function(){$(".input").val($(".input").val()+3)})
$("#16").text("+").click(function(){$(".input").val($(".input").val()+"+")})
$("#17").text("0").click(function(){$(".input").val($(".input").val()+0)})
$("#18").text(".").click(function(){$(".input").val($(".input").val()+".")})
$("#19").text("=").click(function(){$(".input").val(eval($(".input").val()))})



/*function body(body){
    body.style.background = "lightblue";
}

function container(){
    let container = document.createElement("div");
    container.innerHTML = "1";
    container.style.height="100vh";
    container.style.background="black";
    return container;
}

body(document.body);
document.body.appendChild(container);

/*$(document.body).append($("<div>").css("display", "flex")
                            .css("backgound-color", "black").text("1"));*/



/*let xs = window.matchMedia('(max-width: 564px)').matches
let sm = window.matchMedia('(max-width: 767px)').matches
let md = window.matchMedia('(mix-width: 768px)').matches

function mediaXs(xs){
    if(xs){
        console.log("xs")
    }
}
mediaXs(xs)
xs.addListener(mediaXs)

function mediaSm(sm){
    if(sm){
        console.log("sm")
    }
}
mediaSm(sm)
sm.addListener(mediaSm)*/


window.addEventListener('resize', resizeHandler);

// initial call
resizeHandler();

// calculate size
function resizeHandler() {

  // get window width
  const iw = window.innerWidth;
 
  // determine named size


    if (iw <= 564){
        console.log("xs");
        wrapper.css("height","100vh")
                .css("width","100vh")
        for (let p=1;p<=19;p++){
            $("#"+p).css("width","12vh")
                    .css("height","12vh")
                    
        }
                $("#17").css("width","24vh")
    }
    if(iw >574 && iw<=689){
        console.log("sm");
        wrapper.css("height","100vh")
                .css("width","100vh")
                .css("padding","1.5vh")
        for (let p=1;p<=19;p++){
            $("#"+p).css("width","12vh")
                    .css("height","12vh")
                    
        }
        $("#17").css("width","250px")
    }
    if(iw>689){
        console.log("md");
        wrapper.css("height","80vh")
                .css("width","45vh")
                .css("padding","1%")
        for (let p=1;p<=19;p++){
            $("#"+p).css("width","9vh")
                    .css("height","9vh")
        }
        $("#17").css("width","18vh")
    } 
}