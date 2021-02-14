$(function(){

    $(".next").click(function(){
        const  currentImg = $(".show");
        const nextImg = currentImg.next();

        if(nextImg.length){
        currentImg.fadeOut("fast").removeClass("show");
        nextImg.fadeIn("slow").addClass("show");
        }
    });

    
    $(".prev").click(function(){
        const  currentImg = $(".show");
        const prevImg = currentImg.prev();

        if(prevImg.length){
        currentImg.fadeOut("fast").removeClass("show");
        prevImg.fadeIn("slow").addClass("show");
        }
    });
})