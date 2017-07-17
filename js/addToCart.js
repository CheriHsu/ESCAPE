

	var storage = localStorage;
	function doFirst(){
		if(storage['addItemList'] == null){  
			storage['addItemList'] = ''; 
			// storage.clear(); 	
		}
	
	//Add Cart建事件聆聽的功能
		var list = document.querySelector('.button.buy');	
		list.addEventListener('click', function(){
			// storage.clear();
			// BREAK;
			var patonActive = document.querySelectorAll('.paton.actived');
			var sizeBoxChecked = document.querySelectorAll('.sizebox.checked');
			var numInputCheck = document.querySelector('#numberInput');

			// console.log(patonActive.length);
			// console.log(sizeBoxChecked.length);
			// console.log(numInputCheck.defaultValue);
			// console.log(numInputCheck.value);

			if(storage[this.id]){
				swal('此商品已經加入購物車,'+ '\r\n' +'請至購物車修正商品明細');
				BREAK;
			}


			if ( patonActive.length == 0){
				swal("請選擇顏色");
			}else if(sizeBoxChecked.length == 0 ){
				swal("請選擇尺寸");
			}else if(numInputCheck.value == numInputCheck.defaultValue){
				swal("請選擇數量");
			};


			var teddyInfo = document.querySelector('#'+this.id+' input').value;
			if( patonActive.length !=0 && sizeBoxChecked.length != 0 && numInputCheck.value!= ''){
				addItem(this.id, teddyInfo);
				swal("商品已存放至購物車", "繼續購物", "success");
			};
				
		}, false);
	}

	function addItem(itemId,itemValue){
		//***存入storage中
		if(storage[itemId]){
			swal('此商品已經加入購物車,'+ '\r\n' +'請至購物車修正商品明細');
			}else{
				//全部id
				storage['addItemList'] += itemId + ', ';

				//單品明細值
				var patonId = document.querySelector('.paton.actived').id;
				var sizeBoxId = document.querySelector('.sizebox.checked').id;
				var numberInput = document.querySelector('#numberInput').value;
				storage[itemId] = itemValue+'|'+ patonId +'|'+ sizeBoxId  +'|'+numberInput ;	
			}
		}	

	window.addEventListener('load', doFirst, false);
