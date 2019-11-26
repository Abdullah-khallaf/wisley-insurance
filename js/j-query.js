$(document).ready(function(){
    $(".plans").css("display","none");
    $(".sorts").css("display","none");
    $(".details").css("display","block");

    $("#round2").on("click",(function(){
        $(".details").css("display","none");
        $(".plans").css("display","none");
        $(".sorts").show();
    }));
    $("#round1").on("click",(function(){
        $(".plans").css("display","none");
        $(".sorts").css("display","none");
        $(".details").css("display","block");
    }));
    $("#round3").on("click",(function(){
        $(".sorts").css("display","none");
        $(".details").css("display","none");
        $(".plans").show();
    }));
// working on Q-a section.
    $("#q1").on("click",function(){
        $("#a2,#a3,#a4").hide();
        $("#a1").toggle();
    });
    $("#q2").on("click",function(){
        $("#a1,#a3,#a4").hide();
        $("#a2").toggle();
    });
    $("#q3").on("click",function(){
        $("#a1,#a2,#a4").hide();
        $("#a3").toggle();
    });
    $("#q4").on("click",function(){
        $("#a2,#a3,#a1").hide();
        $("#a4").toggle();
    });

    // working on the pop-ups.
    $("#medical-insurance-btn").click(function(){
        $("#Medical-Insurance").fadeIn(1000); 
    });
    $("#Medical-Insurance").on("click",function(){
        $(this).fadeOut(1000);
    });
    $("#Medical-Insurance .inner").on("click",function(e){
        e.stopPropagation();
    });

    $("#general-insurance-btn").click(function(){
        $("#General-Insurance").fadeIn(1000); 
    });
    $("#General-Insurance").on("click",function(){
        $(this).fadeOut(1000);
    });
    $("#General-Insurance .inner").on("click",function(e){
        e.stopPropagation();
    });
    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            $(".pop-up").fadeOut(1000);
        };
    });
    // end working on pop ups.
});