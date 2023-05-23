'use strict'

function game(){
    let time = 60;
    let countdown;
    $('#left').html(time+' с');
    $('#restart').prop('disabled', true);
    countdown = setInterval(function(){
        time--;
        $('#left').html(time+' с');
        if (time == 0){
            alert('Час вийшов!');
            clearInterval(countdown);
            $('#restart').prop('disabled', false);
        }
    }, 1000);
    
    function shuffle(numbers) {
        var ctr = numbers.length, temp, index;
    
        while (ctr > 0) {
    
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = numbers[ctr];
            numbers[ctr] = numbers[index];
            numbers[index] = temp;
        }
        return numbers;
    }

    let numbers = Array.from({length: 25}, (_, i) => i + 1);
    shuffle(numbers);
    let n=0;
    while (n<=25){
        n++;
        let font = Math.floor(Math.random() * 25)*1.9+10;
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        $('#'+n).html(numbers[n]);
        $('#'+n).css('font-size', font+'pt');
        $('#'+n).css('color', '#'+randomColor);
        $('#'+n).click(check);


        function check(element, numbers){
            timer();
            exnum = Math.min.apply(Math, numbers);
            var index = numbers.indexOf(exnum);
            var value = element.value;
            if(exnum == value){
                correct(element);
                if(index > -1){
                    numbers.splice(index, 1);
                }
                if(numbers.length == 0){
                    document.getElementById("game").innerHTML="";
                    Game();
                }
            }
            else{
                setWrong(element);
                setTimeout(function(){
                    setNormal(element)}, 200);
            }
        }
    }
    

}

$(document).ready(game)
 
$('#restart').click(game)