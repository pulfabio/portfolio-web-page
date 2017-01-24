$(document).ready(function() {
    //Activate scrollspy for navbar
    $('body').scrollspy({ target: '#navigation' });

    //Activate and deactivate buttons animations
    $(".link-button").mouseenter(function() {
        $(this).addClass("animated shake");
    });
    $(".link-button").mouseleave(function() {
        $(this).removeClass("animated shake");
    });

    //Add smooth transition to scrollspy
    $("nav ul li a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // store hash
       var hash = this.hash;

       // animate
       $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 1000, function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = hash;
         });

    });
});

/* Removed in favor of scrollspy
    <script type="text/javascript">

        $(document).ready(function() {
            $(".nav a").on("click", function(){
               $(".nav").find(".active").removeClass("active");
               $(this).parent().addClass("active");
            });
        });


    </script> */