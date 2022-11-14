$(document).ready(function(val){
    $(".btn3container .btn3").click(function(){
        $(".btn3container .btn3").removeClass("checked");
        $(this).addClass("checked");
    });
});


$(document).ready(function(val){
    const tabOne = document.querySelector(".link1");
    const tabTwo = document.querySelector(".link2");
    const tabThree = document.querySelector(".link3");
    const contentdiv = $(".scripttabs .tabcontent .contentdiv");

    $(tabOne).click(function(val){
        $(contentdiv).css("marginLeft","0%")
    });
    $(tabTwo).click(function(val){
        $(contentdiv).css("marginLeft","-100%")
    });
    $(tabThree).click(function(val){
        $(contentdiv).css("marginLeft","-200%")
    });


    $(".scripttabs nav a").click(function(val){
        $(".scripttabs nav a").removeClass("checked");
        $(this).addClass("checked");
        return false;
    });


    
});