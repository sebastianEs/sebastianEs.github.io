
window.addEventListener('load', function() {
    
	let uword = document.getElementById('inputWords'),
	udescribe = document.getElementById('describetext'),
	postBtn = document.getElementById('post-button');


	postBtn.addEventListener('click', function(event) {
	let name = uword.value;
	let msg = udescribe.value;
	if(name == '' && msg == '') {
		outputText.innerHTML='no message ?';
	} else {
		sendMessage();	
		outputText.innerHTML='';
	}

	});
	/*udescribe.addEventListener('keypress', function(event) {
		let name = uword.value;
		let msg = udescribe.value;
		if( event.keyCode == '13' && name != '' && msg != '' ) {
			outputText.innerHTML='';
			sendMessage(); 
		}
	});*/

	function getTime() {
		let today = new Date();
		let dateTime;	
		let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		return dateTime = date + ' ' + time;
	}

	function sendMessage(){
	let name = uword.value;
	let msg = udescribe.value;

	firebase.database().ref('users/').push({
		text: msg,
		time: getTime(),
		name: name,
	});
	}
	let db = firebase.database();
		db.ref('users/').on('value', function(snapshot) {
		let data =snapshot.val();
		

	let textArr=[];
	for(let ob in data) {
		textArr.push(data[ob].time + ' ' + data[ob].name + ' : ' + data[ob].text);
		}
		let i
		for( i=textArr.length - 1; i >= 0; i-- ) {
			let li =document.createElement('li');
			li.innerHTML=textArr[i];
			outputText.appendChild(li);
			li.style.borderBottom="1px dotted black";	
	}

	});
	//    event som sparar användarens namn vid blur


	uword.addEventListener('blur', function(event) {		
		let saveName = uword.value;
		localStorage.setItem('key',saveName);
	});

});