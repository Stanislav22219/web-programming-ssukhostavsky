$(document).ready(function(){
    $("#sqr").on("submit", function(event){
        event.preventDefault();
        let value = $("#input").val();

        $.ajax({
            url:'/index.html',
            method:'POST',
            contentType:"application/json",
            data: JSON.stringify({quote: value}),
            success
        })
    })
})







