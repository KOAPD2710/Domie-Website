$(document).ready(function(val){
    $(".btn3container .btn3").click(function(){
        $(".btn3container .btn3").removeClass("checked");
        $(this).addClass("checked");
    });
});


$(document).ready(function(val){

    $(".scripttabs nav a").click(function(val){
        $(".scripttabs nav a").removeClass("checked");
        $(this).addClass("checked");
        if ($(this).hasClass("link1")) {
            $("#smallscreen .descripsm a").removeClass("checked");
            $("#smallscreen .descripsm a.linksm1").addClass("checked");
        }
        if ($(this).hasClass("link2")) {
            $("#smallscreen .descripsm a").removeClass("checked");
            $("#smallscreen .descripsm a.linksm2").addClass("checked");
        }
        if ($(this).hasClass("link3")) {
            $("#smallscreen .descripsm a").removeClass("checked");
            $("#smallscreen .descripsm a.linksm3").addClass("checked");
        }
    });
    $("#smallscreen .descripsm a").click(function(){
        if ($(this).hasClass("linksm1")) {
            $(".scripttabs nav a").removeClass("checked");
            $(".scripttabs nav a.link1").addClass("checked");
        }
        if ($(this).hasClass("linksm2")) {
            $(".scripttabs nav a").removeClass("checked");
            $(".scripttabs nav a.link2").addClass("checked");
        }
        if ($(this).hasClass("linksm3")) {
            $(".scripttabs nav a").removeClass("checked");
            $(".scripttabs nav a.link3").addClass("checked");
        }
        $("#smallscreen .descripsm a").removeClass("checked");
        $(this).addClass("checked");
    });

    const tabOne = document.querySelector(".link1");
    const tabTwo = document.querySelector(".link2");
    const tabThree = document.querySelector(".link3");
    const tabOneSm = document.querySelector(".linksm1");
    const tabTwoSm = document.querySelector(".linksm2");
    const tabThreeSm = document.querySelector(".linksm3");
    const contentdiv = $(".scripttabs .tabcontent .contentdiv");
    const contentdivsm = $("#smallscreen .tabcontent .contentdiv");


    $(tabOne).click(function(val){
        $(contentdiv).css("marginLeft","0%");
        $(contentdivsm).css("marginLeft","0%");
    });
    $(tabTwo).click(function(val){
        $(contentdiv).css("marginLeft","-100%");
        $(contentdivsm).css("marginLeft","-100%");
    });
    $(tabThree).click(function(val){
        $(contentdiv).css("marginLeft","-200%");
        $(contentdivsm).css("marginLeft","-200%");
    });
    $(tabOneSm).click(function(val){
        $(contentdiv).css("marginLeft","0%");
        $(contentdivsm).css("marginLeft","0%");
    });
    $(tabTwoSm).click(function(val){
        $(contentdiv).css("marginLeft","-100%");
        $(contentdivsm).css("marginLeft","-100%");
    });
    $(tabThreeSm).click(function(val){
        $(contentdiv).css("marginLeft","-200%");
        $(contentdivsm).css("marginLeft","-200%");
    });





    
});