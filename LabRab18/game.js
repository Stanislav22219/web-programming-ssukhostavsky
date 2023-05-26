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
        let ctr = numbers.length, temp, index;
    
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
    let i = 0;
    while (n<=25){
        n++;
        console.log(n)
        let font = Math.floor(Math.random() * 25)*1.9+10;
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        $('#'+n).html(numbers[i]);
        $('#'+n).css('font-size', font+'pt');
        $('#'+n).css('color', '#'+randomColor);
        $('#'+n).click(check);
        i++;

        function check(){
            let exnum= Math.min.apply(null, numbers);
            console.log(numbers)
            console.log(exnum)
            let index2 = numbers.indexOf(exnum);
            let value =  $(this).text();
            if(exnum == value){
                console.log('right!')
                if(index2 > -1){
                    numbers.splice(index2, 1);
                    $(this).css('background-color','green')
                }
                if(numbers.length == 0){
                    $(this).css('background-color','green')
                    alert('you won!')
                }
            }
            else{
                console.log('wrong')
                $(this).css('background-color','red')
            }
        }

    }
    

}



$(document).ready(game)
 
$('#restart').click(game)