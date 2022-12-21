$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // if(this.scroll > 500){
        //     $('.scroll-up-btn').addClass("show");
        // }else{
        //     $('.scroll-up-btn').removeClass("show");
        // }

    });
     
    //slide-up script

    // $('.scroll-up-btn').click(function(){
    //        $('html').animate({scrollTop: 0});
    // });

    

     function myfunction(x) {
        x.classList.toggle("change");
      }
     //togle menu navbar script
    $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn').toggleClass("active");
         
     });
     //typing animation script
       var typed = new Typed(".typing", {
        strings: ["Web Development", "Backend Development", "Android Development"],
        typeSpeed: 100,
       backSpeed: 60,
       loop: true
    });

       var typed = new Typed(".typing-2", {
       strings: ["Student.", "2022."],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true
     });
});