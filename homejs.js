//
////BTN_NAME FUNCTION
//

//function onOverEvent() {
//    document.getElementById("name").style.fontWeight = "bold";
//    document.getElementById("name").style.mixBlendMode = "luminosity";
//    document.getElementById("name").style.cursor = "pointer";
//}

//function onOutEvent() {
//    document.getElementById("name").style.fontWeight = "100";
//    document.getElementById("name").style.mixBlendMode = "overlay";
//    document.getElementById("name").style.cursor = "auto";
//}


//$('activate').hover(function() {
//    $('expandline').animate({
//        width: '500px'
//    }, 300);
//}, function() {
//    $('expandline').animate({
//        width: '50px'
//    }, 300);
//});

	  $(document).ready(function(){
       $(".bgorangesun").interactive_bg();
       $(".btns").interactive_bg({
         strength: 10,
         scale: 1.15,
         contain: false,
         wrapContent: true
       });
		});
		
		$(window).resize(function() {
		  $(".bgorangesun > .ibg-bg").css({
		    width: $(window).outerWidth(),
		    height: $(window).outerHeight()
		  })
		})
		