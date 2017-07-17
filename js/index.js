
// Banner parallex
	var xpos,man,female,bannerbg;
	function parallexBanner(){
		xpos=window.pageYOffset;
		man=document.getElementById('man');
		female=document.getElementById('female');
		bannerbg=document.getElementById('bannerbg');
		
		man.style.left=26+xpos*.01+'%';
		female.style.left=39+xpos*.015+'%';
		bannerbg.style.left=xpos*.1+'px';
	}
	window.addEventListener('scroll',parallexBanner);

// product parallex
	var ypos,np1,np2,np3,np4,sp1,sp2,sp3,sp4;
	function parallexProduct(){
		ypos=window.pageYOffset;
		np1=document.getElementById('np1');
		np2=document.getElementById('np2');
		np3=document.getElementById('np3');
		np4=document.getElementById('np4');
		sp1=document.getElementById('sp1');
		sp2=document.getElementById('sp2');
		sp3=document.getElementById('sp3');
		sp4=document.getElementById('sp4');

		np1.style.top=-(ypos*.03)+'px';
		np2.style.top=ypos*.08+'px';
		np3.style.top=-(ypos*.08)+'px';
		np4.style.top=ypos*.02+'px';

		sp1.style.top=-(ypos*.02)+'px';
		sp2.style.top=ypos*.04+'px';
		sp3.style.top=-(ypos*.02)+'px';
		sp4.style.top=ypos*.02+'px';
	}
	window.addEventListener('scroll',parallexProduct);

