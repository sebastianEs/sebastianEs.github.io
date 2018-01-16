
window.addEventListener('load', function() {
	let error = document.getElementById('error');
	let iName = document.getElementById('itemName');
	let iSort = document.getElementById('itemSort');
	let iPrice = document.getElementById('itemPrice');
	let addBtn = document.getElementById('addBtn');
	let sortByName=document.getElementById('sortByName');
    let sortByPrice=document.getElementById('sortByPrice');
	let sortBySort=document.getElementById('sortBySort');
	let quantList=document.getElementById('objectList');
	let table=document.getElementById('td');
	let db=firebase.database();
	
	addBtn.addEventListener('click', function(event) {
		if(iName.value === "" || iSort.value === "" || iPrice.value === "") {
            let span = document.createElement("span");
            error.appendChild(span);
            error.innerHTML =`<span class="form-control">Sorry empty field!</span>`;
            
        } else {
           db.ref('items/').push({
			name: iName.value,
			sort: iSort.value,
			price: Number(iPrice.value),
			quantity: Number(quantList.value)
		}); 
    }
		
});
		db.ref('items/').on('child_added', function(snapshot, prevChildKey) {
	 
	     let data = snapshot.val();
	     addToList(data);
});
   //    function som lägger till produkter
   function addToList(data) {
	    if( table != null ) {
		let tr=document.createElement('tr');
		tr.innerHTML=`<td>${data.name}</td> 
		<td>${data.sort}</td> <td>${data.price}</td> ${'KR'}`;
		table.appendChild(tr);
		} else {
			tr.innerHTML='';
			console.log("objekten skrivs bara ut 1 gång")
		}
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
	
	/*function preventNullInput() {
        if(iName === null || iSort === null || iPrice === null) {
            console.log("YOU HAVE EMPTY FIELDS!");
        } else {
            console.log("new product added successfully!")
        }
    }*/
	
});