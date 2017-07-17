

// Input Number
var numberInput = document.getElementById("numberInput");
num = numberInput.value;
num.oninput = function () {
    if (this.value.length > 3)
        this.value = this.value.slice(0,3); 
}


// album

var timerId,opacity;
function showOpacity(){
  opacity += 0.04;
  document.getElementById("photo_big").style.opacity = opacity;
  if( opacity > 1){
    clearInterval( timerId); 
  }
  // console.log( opacity);
}

function showLarge(e){
  //換圖
  document.getElementById("photo_big").src = e.target.src.replace("small","large");
  //邊線
   e.target.style.borderWidth = "1px";
   e.target.style.borderStyle = "solid";
   e.target.style.borderColor = "red";
  //淡入
  opacity = 0;
  document.getElementById("photo_big").style.opacity = opacity;
  clearInterval( timerId );
  timerId = setInterval(showOpacity, 20);

}


function noborder(e){
	e.target.style.borderWidth = "";
  e.target.style.borderStyle = "";
  e.target.style.borderColor = "";

}

function init(){
  var imgs = document.getElementsByClassName("smphoto");
  for( var i in imgs){
    imgs[i].onmouseover = showLarge;
    imgs[i].onmouseout = noborder;
  }
}

window.onload = init;

// ColorChoose

$(".color .paton").click(function($this){
  var $this= $(this);
  $this.toggleClass("actived");
  // console.log($this);
  
  if( $this.siblings().is('.actived')){
    // console.log($this.siblings().is('.actived'));
    $this.siblings().removeClass('actived');

  }
});

//SizeColor
$(".size .sizebox").click(function($this){
  var $this= $(this);
  $this.toggleClass("checked");
  // console.log($this);
  
  if( $this.siblings().is('.checked')){
    // console.log($this.siblings().is('.checked'));
    $this.siblings().removeClass('checked');

  }
});

// tab
$(document).ready(function() {

  $(".sizeGuide").hide();
  $(".tab.t2").addClass("bgcF0");

  $(".tab.t1").click(function() {
  $(".tab.t1").removeClass("bgcF0");
  $(".tab.t2").addClass("bgcF0");
  $(".sizeGuide").hide();
  $(".discript").show();
  });

  $(".tab.t2").click(function() {
  $(".tab.t2").removeClass("bgcF0");
  $(".tab.t1").addClass("bgcF0");
  $(".sizeGuide").show();
  $(".discript").hide();
  });

 




});


