
//google cse 搜尋後結果預設修正
 function change(){
  // document.getElementById("gsc-i-id1").setAttribute("placeholder", "商品搜尋"); 
  // document.getElementById("gsc-i-id2").setAttribute("placeholder", "商品搜尋");

  document.querySelector(".gsc-adBlock").style.display = "none"; //隱藏廣告
  var x = document.querySelectorAll(".gs-richsnippet-box");   //隱藏圖片資訊
  var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
  
 }
 // window.onload = change;


//google cse 搜尋範圍設定
  (function() {
    var cx = '001083044147874348520:2ldqxuielmo';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();



// 手機版漢堡打開的背景鎖定
  var mobileToggleBtn = document.querySelector('.toggle-btn');
  mobileToggleBtn.addEventListener("click",function () {
    var body = document.body;
    var bodyStyle = window.getComputedStyle(body);
    var bodyStyleValue = bodyStyle.getPropertyValue('overflow');
    // console.log(bodyStyleValue);
    if(bodyStyleValue == 'visible'){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'visible';
    }

  });
  


// nav fixed

$(document).ready(function($) {

	var navbarDerTop = 34;
	var scrollbarDerTop = 0;
	$(window).scroll(

		function(){
		scrollbarDerTop = $(window).scrollTop();
		if(scrollbarDerTop >= navbarDerTop){
			$('.nav').addClass('fixed');
		}else{
			$('.nav').removeClass('fixed');
		}
		// console.log(scrollbarDerTop)
		}
	)


});