
	let error = document.getElementById('error');
	let iName = document.getElementById('itemName');
	let iSort = document.getElementById('itemSort');
	let iPrice = document.getElementById('itemPrice');
	let addBtn = document.getElementById('addBtn');
	let sortByName=document.getElementById('sortByName');
	let sortByPrice=document.getElementById('sortByPrice');
	let sortBySort=document.getElementById('sortBySort');
	let quantList=document.getElementById('objectList');
	let table=document.getElementById('table');
	let db=firebase.database();
	let ref = db.ref("/items");
	

	function handleAddEvent() {
			if(!iName.value || !iSort.value || !iPrice.value) {
				let span = document.createElement("span");
				error.appendChild(span);
				error.innerHTML =`<h2>Sorry empty field!</h2>`;
				
			} else {
				ref.push({
				name: iName.value,
				sort: iSort.value,
				price: Number(iPrice.value),
				quantity: Number(quantList.value)
			}); 
		}
	}

	function orderByChild(child) {
		ref.orderByChild(child).on('value', snapshot => {
			snapshot.forEach((item) => {
				console.log(item.val())
			});
		});
	}

	function addToList(data) {
	    if(ref) {
		let tr = document.createElement('tr');
		tr.innerHTML=`<td>${data.name}</td> 
		<td>${data.sort}</td> <td>${data.price}</td> <td>${'KR'}</td>`;
		table.appendChild(tr);
		} else {
			tr.innerHTML='';
		}
	}

	function showListOfItems(items) {
		if(!items) return;
		ref.on('value', function(snapshot) {
			snapshot.forEach( itemsRef => {addToList(itemsRef.val());
			});
		});
	}


/*''''''''''''''' KLICK EVENTS ''''''''''''''*/
window.onload = function () {
	addBtn.addEventListener('click', handleAddEvent);
	quantList.addEventListener('mouseover', showListOfItems(ref));
};