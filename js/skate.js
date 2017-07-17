// Banner
var ypos,skater,slogan;
function parallexSkate(){
	ypos=window.pageYOffset;
	skater=document.getElementById('bn-skater');
	slogan=document.getElementById('slogan');

	skater.style.top=ypos*.6+'px';
	// slogan.style.top=-(ypos*.2)+'px';
	slogan.style.top=ypos*1.2+'px';

	// np2.style.top=ypos*.08+'px';	
}
window.addEventListener('scroll',parallexSkate);