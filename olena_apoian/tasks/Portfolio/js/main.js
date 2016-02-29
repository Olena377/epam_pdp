$("#burger-btn").on('click', function(){
    $("body").animate({
        'marginLeft' : "275px"
    });
    $(this).hide();
});
$("#close-btn").on('click', function(){
    $("body").animate({
        'marginLeft' : "0"
    });
    $("#burger-btn").show();
});