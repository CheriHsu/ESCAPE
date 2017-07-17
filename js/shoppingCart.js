
	var storage = localStorage;
	var itemPriceTotal;
	function doFirst(){
		var itemString = storage['addItemList'];
		console.log(itemString); 
		if(itemString==[""]){
			swal('購物車目前無任何商品');

			//BTN disabled
			var booking = document.getElementById('booking');
			booking.disabled = true; 
			booking.style.backgroundColor = '#ccc';
			booking.style.cursor ='default';

			var clearCart = document.getElementById('clearCart');
			clearCart.disabled = true; 
			clearCart.style.backgroundColor = '#ccc';
			clearCart.style.cursor ='default';
			return false;
		}

		var items = itemString.substr(0,itemString.length-2).split(', ');
		console.log(itemString);
		console.log(items);

		

		//建立table
		newItem = document.createElement('section');
		newItem.id = 'allItems';
		newTable = document.createElement('table');
		
		for(var key in items){	
			var itemInfo = storage[items[key]]; // xxx|xx.jpg|$
			//帶入自建function addItem(itemId,itemValue){};
			createCartList(items[key],itemInfo); 
		}
		
		newItem.appendChild(newTable); 
		document.getElementById('cartList').appendChild(newItem); 
		
		//=====subtotal()=====
		subtotal = 0;
		for(var key in items){	
			var itemValue = storage[items[key]];
			var itemPrice = parseInt(itemValue.split('|')[2]);
			subtotal += itemPrice;
		}
		document.getElementById('subtotal').innerText = subtotal;


		//點擊清除所有商品
		var clearCart = document.getElementById('clearCart');
		clearCart.addEventListener('click',clearAllBtn);

		//點擊送出訂單
		var booking = document.getElementById('booking');
		booking.addEventListener('click',bookingBtn);



	}


	function createCartList(itemId,itemValue){

		var itemTitle = itemValue.split('|')[0];
		var itemImage = 'images/small/'+itemValue.split('|')[1];
		var itemPrice = parseInt(itemValue.split('|')[2]);
		
		//建立每個品項的<tr>
		var trItemList = document.createElement('tr'); 
		trItemList.className = 'item';	
		newTable.appendChild(trItemList);	

		//======建立商品圖片--第1個td 
		var tdImage = document.createElement('td'); 
		tdImage.style.width = '120px'; 
		tdImage.style.minWidth = '60px'; 
		tdImage.className = 'tdImage';
		var image = document.createElement('img'); 
		image.src = itemImage; 
		image.width = 80; 
		
		tdImage.appendChild(image); 
		trItemList.appendChild(tdImage);
		


		//======建立商品名稱--第2個td
		var tdTitle = document.createElement('td'); 
		tdTitle.style.width = '280px';
		tdTitle.style.minWidth = '129px';
		tdTitle.id = itemId; 

		var pTitle = document.createElement('p');
		pTitle.innerText = itemTitle;

		tdTitle.appendChild(pTitle);	
		trItemList.appendChild(tdTitle);		
		



		//======建立商品價格--第3個td
		var tdPrice = document.createElement('td');	
		tdPrice.style.width = '65px';
		tdTitle.style.minWidth = '129px';
		tdPrice.className = 'tdPrice';	 
		tdPrice.innerText = '$' + itemPrice;	
		
		trItemList.appendChild(tdPrice); 
		


		//======建立顏色--第4個td
		var tdItemColor = document.createElement('td');		
		tdItemColor.style.width = '65px';
		tdItemColor.style.minWidth = '51px';
		
		var selectColor = document.createElement('select');	
 		selectColor.className = 'selectColor';

		var whiteOption = document.createElement('option');
		var redOption = document.createElement('option');
		var blueOption = document.createElement('option');
		var greenOption = document.createElement('option');

		whiteOption.value = "white";
		whiteOption.innerHTML = "白色";
		redOption.value = "red";
		redOption.innerHTML = "紅色";
		blueOption.value = "blue";
		blueOption.innerHTML = "藍色";
		greenOption.value = "green";
		greenOption.innerHTML = "綠色";


		var defaultColor = itemValue.split('|')[3];
		console.log(defaultColor);
		switch ( defaultColor){
			case 'white':
				whiteOption.selected="true";
				break;
			case 'red':
				redOption.selected="true";
				break;
			case 'blue':
				blueOption.selected="true";
				break;
			case 'green':
				greenOption.selected="true";
				break;
		}
		
		selectColor.appendChild(whiteOption);
		selectColor.appendChild(redOption);
		selectColor.appendChild(blueOption);
		selectColor.appendChild(greenOption);
		tdItemColor.appendChild(selectColor);	
		trItemList.appendChild(tdItemColor); 


		//======建立尺寸--第5個td
		var tdItemSize = document.createElement('td');		
		tdItemSize.style.width = '65px';
		tdItemSize.style.minWidth = '51px';

		var selectSize = document.createElement('select');	
		selectSize.className = 'selectSize';

		var xsOption = document.createElement('option');
		var sOption = document.createElement('option');
		var mOption = document.createElement('option');
		var lOption = document.createElement('option');
		var xlOption = document.createElement('option');
		var xllOption = document.createElement('option');

		xsOption.value = "xs";
		xsOption.innerHTML = "XS";
		sOption.value = "s";
		sOption.innerHTML = "S";
		mOption.value = "m";
		mOption.innerHTML = "M";
		lOption.value = "l";
		lOption.innerHTML = "L";
		xlOption.value = "xl";
		xlOption.innerHTML = "XL";
		xllOption.value = "xll";
		xllOption.innerHTML = "2XL";


		var defaultSize = itemValue.split('|')[4];
		console.log(defaultSize);
		switch (defaultSize){
			case 'XS':
				xsOption.selected="true";
				break;
			case 'S':
				sOption.selected="true";
				break;
			case 'M':
				mOption.selected="true";
				break;
			case 'L':
				lOption.selected="true";
				break;
			case 'XL':
				xlOption.selected="true";
				break;
			case '2XL':
				xllOption.selected="true";
				break;
		}
		
		selectSize.appendChild(xsOption);
		selectSize.appendChild(sOption);
		selectSize.appendChild(mOption);
		selectSize.appendChild(lOption);
		selectSize.appendChild(xlOption);
		selectSize.appendChild(xllOption);
		tdItemSize.appendChild(selectSize);	
		trItemList.appendChild(tdItemSize); 


		//======建立商品數量--第6個td		
		var tdItemCount = document.createElement('td');	
		tdItemCount.style.width = '65px';
		tdItemCount.style.minWidth = '51px';
		
		var itemCount = document.createElement('input');	
		itemCount.type = 'number';
		itemCount.min = 0;
		itemCount.max = 100;
		itemCount.value = itemValue.split('|')[5];
		itemCount.setAttribute('sprice', itemPrice);
		itemCount.className = 'num';
		itemPrice.innerHTML = itemPrice;
		console.log(itemPrice);
		itemCount.addEventListener('input', changeItemCount, false);
		itemCount.addEventListener('input', subtotal, false);
		
		tdItemCount.appendChild(itemCount);		
		trItemList.appendChild(tdItemCount); 




		//======建立小計--第7個td  
		var tdItemTotalPrice = document.createElement('td');	
		tdItemTotalPrice.style.width = '65px';
		tdItemTotalPrice.style.minWidth = '60px';

		tdItemTotalPrice.className = "itemTotalPrice";
		tdItemTotalPrice.innerText = '$' + itemPrice * parseInt(itemCount.value);
		
		trItemList.appendChild(tdItemTotalPrice); 


		//======建立編輯--第8個td
		var tdDelete = document.createElement('td');
		tdDelete.style.width = '65px'; 
		tdDelete.id = itemId; 

		//刪除按鈕 <button>Delete</button>
		var button = document.createElement('button');
		button.innerText = '刪除';
		button.addEventListener('click', deleteItem, false);

		tdDelete.appendChild(button);	
		trItemList.appendChild(tdDelete);
	}

	//移除商品
	function deleteItem(){
		var itemId = this.parentNode.getAttribute('id'); 

		//刪除-扣除該筆資料金額
		var itemValue = storage[itemId];
		subtotal -= parseInt(itemValue.split('|')[2]); 
		console.log(subtotal);
		
		document.getElementById('subtotal').innerText = subtotal;	
		
		//清除storage的資料
		storage.removeItem(itemId); 
		this.parentNode.getAttribute('id');
		storage['addItemList'] = storage['addItemList'].replace(itemId+', ','');	
		
		//該筆tr刪除
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

		//BTN disabled
		var itemString = storage['addItemList'];
		if(itemString==undefined || itemString==''){
			console.log(itemString);
			storage.clear();

			var booking = document.getElementById('booking');
			booking.disabled = true; 
			booking.style.backgroundColor = '#ccc';
			booking.style.cursor ='default';

			var clearCart = document.getElementById('clearCart');
			clearCart.disabled = true; 
			clearCart.style.backgroundColor = '#ccc';
			clearCart.style.cursor ='default';
		
			return false;
		}
	}

	//小計
	function changeItemCount(){ 

	    var numValue = this.value;

		var itemString = storage['addItemList']; 
		var items = itemString.substr(0,itemString.length-2).split(', '); 
		for(var key in items){
			var itemPrice = parseInt(this.getAttribute('sprice'));
			itemPriceTotal = itemPrice * numValue;
			// console.log(itemPriceTotal);
			this.parentNode.nextSibling.innerText = itemPriceTotal;
		}
	}

	//總金額
	function subtotal() {

	    try {
	        var subtotal = 0;
	        var numValue = 1;
	        var items = document.getElementsByTagName('input');

	        for (var key in items) {
	            if (items[key].type == 'number') {
	                subtotal += (parseInt(items[key].getAttribute('sprice')) *
	                                    parseInt(items[key].value));
	            }
	        }
	    } catch (ex) {
	        alert(ex);
	    }
	    
	    document.getElementById('subtotal').innerText =  subtotal;


	 //BTN disabled
		var subtotal = document.getElementById('subtotal').textContent;
		if(subtotal  == 0){
			
			var booking = document.getElementById('booking');
			booking.disabled = true; 
			booking.style.backgroundColor = '#ccc';
			booking.style.cursor ='default';

			var clearCart = document.getElementById('clearCart');
			clearCart.disabled = true; 
			clearCart.style.backgroundColor = '#ccc';
			clearCart.style.cursor ='default';
		
			return false;
		}else{
			var booking = document.getElementById('booking');
			booking.disabled = false; 
			booking.style.backgroundColor = 'rgb(226, 97, 88)';
			booking.style.cursor ='pointer';

			var clearCart = document.getElementById('clearCart');
			clearCart.disabled = false; 
			clearCart.style.backgroundColor = 'rgb(226, 97, 88)';
			clearCart.style.cursor ='pointer';
		
			return false;
		}

	}

	//清除全部商品
	function clearAllBtn(){
		

		//刪除-扣除該筆資料金額
		document.getElementById('subtotal').innerText =  0;
		//clear storage
		storage.clear();
		//該筆tr刪除
		var allItems = document.getElementById('allItems');
		cartList.removeChild(allItems);
		
		swal('購物車已無任何商品');
		//BTN disabled

		var itemString = storage['addItemList'];
		console.log(itemString);
		if(itemString == undefined){
			
			var booking = document.getElementById('booking');
			booking.disabled = true; 
			booking.style.backgroundColor = '#ccc';
			booking.style.cursor ='default';

			var clearCart = document.getElementById('clearCart');
			clearCart.disabled = true; 
			clearCart.style.backgroundColor = '#ccc';
			clearCart.style.cursor ='default';
		
			return false;
		}

	}

	function bookingBtn(){
		//刪除-扣除該筆資料金額
		document.getElementById('subtotal').innerText =  0;
		//clear storage
		storage.clear();
		//該筆tr刪除
		var allItems = document.getElementById('allItems');
		cartList.removeChild(allItems);
		
		swal('訂單已送出');
		//BTN disabled

		var itemString = storage['addItemList'];
		console.log(itemString);
		if(itemString == undefined){
			
			var booking = document.getElementById('booking');
			booking.disabled = true; 
			booking.style.backgroundColor = '#ccc';
			booking.style.cursor ='default';

			var clearCart = document.getElementById('clearCart');
			clearCart.disabled = true; 
			clearCart.style.backgroundColor = '#ccc';
			clearCart.style.cursor ='default';
		
			return false;
		}
	}

	window.addEventListener('load', doFirst, false);
	

