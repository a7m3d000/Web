$(function(){

    // ======================  Vriabuls ======================  
    const input = $(".input0");
    const result = $(".output0");

    // ======================  Actions ======================  
    input.change(function(){

        $(".color-screen").css('background-color', this.value);
        result.val(this.value)

      });

      

});