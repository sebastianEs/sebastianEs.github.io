
window.addEventListener('load', function() {
	
	let iName = document.getElementById('itemName');
	let iSort = document.getElementById('itemSort');
	let iPrice = document.getElementById('itemPrice');
	let addBtn = document.getElementById('addBtn');
	let sortByName=document.getElementById('sortByName');
    let sortByPrice=document.getElementById('sortByPrice');
	let sortBySort=document.getElementById('sortBySort');
	let quantList=document.getElementById('objectList');
	let table=document.getElementById('td');
	
	
	addBtn.addEventListener('click', function(event) {
		let db=firebase.database();
		db.ref('items/').push({
			name: iName.value,
			sort: iSort.value,
			price: Number(iPrice.value),
			quantity: Number(quantList.value)
		});
		
		db.ref('items/').on('child_added', function(snapshot, prevChildKey) {
	 
	     let data = snapshot.val();
	     addToList(data);
});
   //    function som lägger till produkter
   function addToList(data) {
		let tr=document.createElement('tr');
		tr.innerHTML=`<td style="font-size:130%;">${data.name}</td> 
		<td style="font-size:130%;">${data.sort}</td> <td style="font-size:130%;">${data.price}</td> ${'KR'}`;
		
		table.appendChild(tr);
	}
   //    function som sorterar alla produkter
    function sortData(sortBtn,sortItems) {
		sortBtn.addEventListener('click', function(event) {
		table.innerHTML='';
		db.ref('items/').orderByChild(sortItems).once
		('value', function(snapshot) {
			snapshot.forEach( itemsRef => {addToList(itemsRef.val());
			})
		});
	  });
	}
	sortData(sortByName,"name"); 
	sortData(sortByPrice,"price");
	sortData(sortBySort,"sort");
	sortData(quantList,"quantity");
	//    event som lägger till antal objekt som ska visas
	quantList.addEventListener('blur', function(event) {
		let num =Number(quantList.value);
		table.innerHTML='';
		
		if( isNaN(num) ) {
			console.log("No number");
			
		} else {
			db.ref('items/').limitToLast(num).once('value', function(snapshot) {
				snapshot.forEach( itemsRef => {addToList(itemsRef.val());
				});
			})
		
		}
	});
	
	});
	
	
});
