
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
		sendMessage();
		snapFromdatabase();
		pushTodatabase();
		console.log("namn och input finns 1")
	    
		 } else {
			 console.log("namn och input finns inte 1")
			 // fixa clicket vid error!
			  h1.innerHTML="You have to create username to chatt.";
		 }
	 });
	 udescribe.addEventListener('keypress', function(event) {
		  let name = uword.value;
	      let msg = udescribe.value;
		 if( event.keyCode == '13' && name != '' && msg != '' ) {
		  sendMessage();
		  snapFromdatabase();
		  pushTodatabase();
		   console.log('namn och input finns 2' )
		
		 } else {
			 	// fixa keypress vid error!
			 console.log('namn och input finns inte 2' )
			 //alert('Did you forget to login ?')
			 h1.innerHTML="You have to create username to chatt.";
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
		  console.log('klockan är :' + currentTime);
		 firebase.database().ref('/messages ' + name).set({
			 text: msg,
			 time: currentTime,
			 id: name
		 });
		 console.log('texten är :' + name +' ' + currentTime + ' ' + msg)
		  
		 let outputText = document.getElementsByClassName('outputText')[0];
		 let elem = document.createElement('div');
		 elem.innerHTML = name +': '+ currentTime + msg;
		
		
		if( name == "" ) {
			 console.log('search field is empty!')
			 elem.innerHTML = "";	
			 alert('You must be logged in to chatt!');
		 } else if( name == name && msg == "" ){
			 console.log("name field is empty")
			 
			  
		 } else {
			 elem.innerHTML = name +': '+ currentTime + ' ' + msg;
			 console.log('alla fält är ifyllda!');
			 document.getElementById('describetext').value = '';
		 }
		 
		 
		 console.log('har if om log in körts?')

		 
		 
		if( outputText.childNodes.length == 0 ) {
			outputText.appendChild(elem);
			
		 } else {
			outputText.insertBefore( elem, outputText.childNodes[0] ); 			
			elem.style.borderBottom = '1px solid gray';
		 }
		 
		 
		 
		 
	 }
	    function pushTodatabase() {
       	 let ct = new Date()
		 let h = ct.getHours();
		 let m = ct.getMinutes();
	     let currentTime = h + ':' + m +':';
	   let newPostref = firebase.database().ref('messages/').push({
		  
		   id: uword.value,
		   time: currentTime,
		   text: udescribe.value,
		  
	   });
	    
		let key = newPostref.key;
	    console.log(newPostref);
	   }
	   
	   function snapFromdatabase() {
	 
		 let db = firebase.database();
		 db.ref('messages/').on('value', function(snapshot) {
			 let data =snapshot.val();
			 let key =snapshot.key;
		
			 for( let prop in data ) {
				 console.log("snapshot data " + data[prop]);
			 }
		 })
		 
	 }
	 
	
	 //    event som sparar användarens namn vid blur
	 
	 
	 uword.addEventListener('blur', function(event) {
		 
		 
		 console.log('show me on blur!')
		 let saveName = uword.value;
		 console.log('namnet sparades! ' + saveName)
		 localStorage.setItem('key',saveName);
		 let val = localStorage.getItem('key');
		 console.log('sparas i localStorage? ' + val)
		 h1.innerHTML="Let's chatt";
	 });
	 
	 //     event som tar bort aktuell användare
	 logOutBtn.addEventListener('click', function(e) {
		 if( uword.value != "" ) {
		localStorage.removeItem('key');
        console.log('namnet är borta ? ')
        uword.innerHTML ="";
		h1.innerHTML="Username is logged out";
       	} else {
			console.log("name still valid");
		}
	 });
	 
	 
	    
		
});