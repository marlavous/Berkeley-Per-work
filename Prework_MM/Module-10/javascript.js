//grow
$("#button1").on("click", function() {
    $("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//blue - this one does not work and I cannot figure out why
$("#button2").on("click", function() {
    $("#box").css("color", "blue")
})


//fade
$("#button3").on("click", function() {
    $("#box").animate({opacity:".5"});
})



//reset - I couldn't figure out how to reset the color
$("#button4").on("click", function() {
    $("#box").animate({height:"150px", width:"150px"}, "fast");
})


