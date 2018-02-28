$(document).ready(function(){
    $("textarea").on("keyup", function(){
        const counterLetters = this.value.length;
        const counterRemaing = 140 - counterLetters;
        if (counterLetters <= 140) {
            $(".counter").text(counterRemaing).css("color", "black");
        } else {
            $(".counter").text(counterRemaing).css("color", "red");
        }
    });
})