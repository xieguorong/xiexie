$(function(){
    var cliH=$(window).height();
    var num=0;
    var flag=true;
    $("#fullpage").mousedown(function(e){
      e.preventDefault();
    })
    $("#fullpage").mousemove(function(e){
      e.preventDefault();
    })
   touch.on("body","swipeup","#fullpage",function(){
       if(!flag){
           return;
       }
        num++;
       if(num==$("section").length){
           num=$("section").length-1;
           return
       }
       flag=false;
       $("#fullpage").css({marginTop:-num*cliH});
   })
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return
        }
        flag=false;
        $("#fullpage").css({marginTop:-num*cliH});
    })
    document.getElementById("fullpage").addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
$(".circle a").click(function(){
  num++;
  $("#fullpage").css({marginTop:num*cliH});

})

// var flage2=true;
// $(".menu").click(function(){
//   if(flage2){
//     $(".menutop").css({"transform":"translate(0,6px) rotate(45deg)"})
//     $(".menubottom").css({"transform":"translate(0,-6px) rotate(-45deg)"});
//     $(".menu-zi a").each(function (index,obj){
//       $(obj).css({
//         opacity:"0",transform:"rotateX(90deg)",animation:"menu 1s linear forwards"+index*0.2+"s",
//       })
//     })
//     flage2=false;
//   }else{
//     $(".menutop").css("transform","translate(0,0px) rotate(0deg)");
//     $(".menubottom").css("transform","translate(0,0px) rotate(0deg)");
//      $(".menu-zi a").each(function (index,obj) {
//                 $(obj).css({
//                     opacity:"1",
//                     transform:"rotateX(0deg)",
//                     animation:"menu1 1s  linear forwards "+(1.4-index*0.2)+"s",
//                 })
//             })
//      flage2=true;
//   }
// })
var flage2=true;
    $(".muen").click(function () {
        if(flage2){
            $(".muen .muen-top").css({"transform":
                "translate(0,6px) rotate(45deg)"})
            $(".muen .muen-bott").css("transform","translate(0,-6px) rotate(-45deg)")
            $(".muen-zi a").each(function (index,obj) {
                $(obj).css({
                    opacity:"0",
                    transform:"rotateX(90deg)",
                    animation:" muen 1.5s  linear forwards "+index*0.2+"s",
                })
            })
            flage2=false;
        }else{
            $(".muen .muen-top").css("transform","translate(0,0px) rotate(0deg)")
            $(".muen .muen-bott").css("transform","translate(0,0px) rotate(0deg)")
            $(".muen-zi a").each(function (index,obj) {
                $(obj).css({
                    opacity:"1",
                    transform:"rotateX(0deg)",
                    animation:" muen1 1.5s  linear forwards "+(1.2-index*0.2)+"s",
                })
            })
            flage2=true;
        }

    })
   
})
