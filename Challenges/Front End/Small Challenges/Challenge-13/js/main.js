$(function(){
    /*====================== Public Vraiables ======================*/
    const slids = $(".slide");
    const content = $(".content");

    /*====================== The Function ======================*/
    slids.click(function(){
        // const thisTiltle = $(this);

        /*====================== Function Vraiables ======================*/
        const thisContent = $(this).find(content); 

        /*====================== Function Actions and Events ======================*/
        thisContent.slideToggle();
        content.not(thisContent).slideUp();
    });

    
})