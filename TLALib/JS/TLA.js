/* Navigation */
$(document).ready(function() {
    //toggler menu if screen <768px
    $(".navbar-toggler").click(function() {
        $($(this).attr("data-target")).toggle();  
    });
    $(".nav-item").click(function(){
        $(".navbar-collapse").hide();
    })
})