
window.addEventListener('load', function() {
    
     let uword = document.getElementById('inputWords'),
     udescribe = document.getElementById('describetext'),
     postBtn = document.getElementById('post-button');
	 
	 
	postBtn.addEventListener('click', function(event) {
		 let name = uword.value;
	     let msg = udescribe.value;
		if( name != '' && msg != '' ) {
			outputText.innerHTML='';
	       sendMessage();	
	    h1.innerHTML="";
		 } else {
		 }
	 });
	 udescribe.addEventListener('keypress', function(event) {
		  let name = uword.value;
	      let msg = udescribe.value;
		 if( event.keyCode == '13' && name != '' && msg != '' ) {
			 outputText.innerHTML='';
		  sendMessage(); 
		 } else {
			 
		 }
	 });
	
	 function sendMessage(){
		 let name = uword.value;
	     let msg = udescribe.value;
		 let ct = new Date()
		 let h = ct.getHours();
		 let m = ct.getMinutes();
		 
		 
		 if( h == 24 ) {
			 h = 0;
		 } else if( h > 12 ) {
			 h = h-0;
		 }
		//  skriver ut tiden  
		
		
		 let currentTime = h + ':' + m +': ';
		 
		  
		 
		 firebase.database().ref('users/').push({
			 text: msg,
			 time: currentTime,
			 name: name,
		 });
		
		
		
		if( name == "" ) {
			 console.log('search field is empty!')

			
		 } else if( name == name && msg == "" ){
			 console.log("name field is empty")
			 
			  
		 } else {
			 
			 console.log('alla fält är ifyllda!');
			 document.getElementById('describetext').value = '';
		 }   
		 
		 
	 }
	       let db = firebase.database();
		     db.ref('users/').on('value', function(snapshot) {
			 let data =snapshot.val();
		     
			
			let textArr=[];
			for(let ob in data) {
				
				textArr.push(data[ob].time+data[ob].name+': '+data[ob].text);
				
				}
				for( let i=textArr.length -1; i >= 0; i-- ) {
					let li =document.createElement('li');
					li.innerHTML=textArr[i];
					outputText.appendChild(li);
					li.style.borderBottom="1px solid gray";		
				
			}
			
		 });
	 //    event som sparar användarens namn vid blur
	 
	 
	 uword.addEventListener('blur', function(event) {		
		 let saveName = uword.value;
		 localStorage.setItem('key',saveName);
		 let val = localStorage.getItem('key');
		 
	 });
		
});