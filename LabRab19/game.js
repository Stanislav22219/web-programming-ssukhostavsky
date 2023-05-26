'use strict'

$(document).ready(game)


function game(){
    let wrapper = $("<div>").addClass("wrapper");
    let tbl = $("<table>").attr("id", "tbl1").addClass("table");
    let tr1 = $("<tr>").append($("<td>").text("Some Text").attr("id", "1"))
                        .append($("<td>").text("Some otder text").attr("id", "2"))
                        .append($("<td>").text("even more text").attr("id", "3"))
                        .append($("<td>").text("even more text").attr("id", "4"))
                        .append($("<td>").text("even more text").attr("id", "5"));
    
    let tr2 = $("<tr>").append($("<td>").text("row 1 column 1")).attr("id", "6")
                        .append($("<td>").text("row 1 column 2")).attr("id", "7")
                        .append($("<td>").text("row 1 column 2")).attr("id", "8")
                        .append($("<td>").text("row 1 column 2")).attr("id", "9")
                        .append($("<td>").text("row 1 column 3")).attr("id", "10");

    let tr3 = $("<tr>").append($("<td>").text("row 1 column 1")).attr("id", "11")
                        .append($("<td>").text("row 1 column 2")).attr("id", "12")
                        .append($("<td>").text("row 1 column 2")).attr("id", "13")
                        .append($("<td>").text("row 1 column 2")).attr("id", "14")
                        .append($("<td>").text("row 1 column 3")).attr("id", "15");

    let tr4 = $("<tr>").append($("<td>").text("row 1 column 1")).attr("id", "16")
                        .append($("<td>").text("row 1 column 2")).attr("id", "17")
                        .append($("<td>").text("row 1 column 2")).attr("id", "18")
                        .append($("<td>").text("row 1 column 2")).attr("id", "19")
                        .append($("<td>").text("row 1 column 3")).attr("id", "20");

    let tr5 = $("<tr>").append($("<td>").text("row 1 column 1")).attr("id", "21")
                        .append($("<td>").text("row 1 column 2")).attr("id", "22")
                        .append($("<td>").text("row 1 column 2")).attr("id", "23")
                        .append($("<td>").text("row 1 column 2")).attr("id", "24")
                        .append($("<td>").text("row 1 column 3")).attr("id", "25");


    let right = $("<div>").addClass("right");
    let btn = $("<button>").text("Почати з початку").attr("id", "restart");



    wrapper.append(tbl);
    wrapper.append(right);
        right.append(btn);
        tbl.append(tr1);
        tbl.append(tr2);
        tbl.append(tr3);
        tbl.append(tr4);
        tbl.append(tr5);
    $(document.body).append(wrapper);
}