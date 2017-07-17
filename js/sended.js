var cc = document.querySelector(".range");
cc.addEventListener('click',function(e){console.log(e);});

var inputValue = document.querySelectorAll(".range .form");
var textareaValue = document.querySelector("textarea").value;
	
		
document.querySelector('.range .bt').onclick = function(){
	var textareaValue = document.querySelector("textarea.form").value;
	console.log('textareaValue'+textareaValue);
	if(textareaValue ==""){
		swal( "請填寫留言內容");
		return false;
		BREAK;
	}else if (inputValue[0].value !== "" && inputValue[1].value !== "" && inputValue[2].value !== "" && inputValue[3].value !== "" && inputValue[4].value !== ""){
		swal("留言已經送出!", "我們將盡速回覆您", "success");
		return false;
	};
};

