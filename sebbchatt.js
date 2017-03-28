
window.addEventListener('load', function() {
    

   

    let logInBtn = document.getElementById('login-btn');
	let logOutBtn = document.getElementById('logout-btn');

     let uword = document.getElementById('inputWords'),
     udescribe = document.getElementById('describetext'),
     postBtn = document.getElementById('post-button');
	 
	 let h1 = document.getElementById('h');
	 
	postBtn.addEventListener('click', function(event) {
		 let name = uword.value;
	     let msg = udescribe.value;
		if( name != '' && msg != '' ) {
			outputText.innerHTML='';
	       sendMessage();	
		console.log("namn och input finns 1" )
	    h1.innerHTML="";
		 } else {
			 console.log("namn och input finns inte 1")
			 
			  h1.innerHTML="You have to create username to chatt.";
		 }
	 });
	 udescribe.addEventListener('keypress', function(event) {
		  let name = uword.value;
	      let msg = udescribe.value;
		 if( event.keyCode == '13' && name != '' && msg != '' ) {
			 outputText.innerHTML='';
		  sendMessage();
		   console.log('namn och input finns 2' )
		
		 } else {
			 	
			 console.log('namn och input finns inte 2' )
			 
			 h1.innerHTML="Missing input";
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
		
		
		 let currentTime = h + ':' + m +':';
		 
		  
		 
		 firebase.database().ref('users/').push({
			 text: msg,
			 time: currentTime,
			 name: name,
			 id: ""
		 });
		 
		
		  
		 let outputText = document.getElementById('outputText');
		 
		
		
		
		if( name == "" ) {
			 console.log('search field is empty!')

			
		 } else if( name == name && msg == "" ){
			 console.log("name field is empty")
			 
			  
		 } else {
			 
			 console.log('alla fält är ifyllda!');
			 document.getElementById('describetext').value = '';
		 }
		 
		 
		

		 
		 
		/*if( outputText.childNodes.length == 0 ) {
			outputText.appendChild(li);
			
		 } else {
			outputText.insertBefore( li, outputText.childNodes[0] ); 			
			li.style.borderBottom = '1px solid gray';
		 }*/
		 
		  
		 
		 
	 }
	let db = firebase.database();
		     db.ref('users/').on('value', function(snapshot) {
			 let data =snapshot.val();
		    console.log(data);
			
			let textArr=[];
			for(let ob in data) {
				console.log(data[ob].text);
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
		 h1.innerHTML="Let's chatt";
		 
	 });
	 
	 //     event som tar bort aktuell användare
	 logOutBtn.addEventListener('click', function(e) {
		 if( uword.value != "" ) {
		localStorage.removeItem('key');
        uword.innerHTML ="";
		h1.innerHTML="Username is logged out";
       	} else {
			h1.innerHTML="user is logged in";
			uword.innerHTML="";
		}
	 });
	 
	 
	    
		
});