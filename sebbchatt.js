
window.addEventListener('load', function() {
    

    // let msg = document.getElementById('mymessage');

    let logInBtn = document.getElementById('login-btn');
	let logOutBtn = document.getElementById('logout-btn');

     let uword = document.getElementById('inputWords'),
     udescribe = document.getElementById('describetext'),
     postBtn = document.getElementById('post-button');
	 
	 
	 
	
		 let ct = new Date()
		 let h = ct.getHours();
		 let m = ct.getMinutes();
		 let s = ct.getSeconds();
		 
		 if( h == 24 ) {
			 h = 0;
		 } else if( h > 12 ) {
			 h = h-0;
		 }
		//  skriver ut tiden  
		 let currentTime = h + ':' + m + ':' + s + ' :';
	 
	 
	    console.log('klockan är :' + currentTime);
	 
		
	 
	 
	 postBtn.addEventListener('click', function(event) {
		 let name = uword.value;
	     let msg = udescribe.value;
		 firebase.database().ref('/words' + name).set({
			 text: msg,
			 time: currentTime,
			 id: ''
		 });
		 console.log('texten är :' + name +' ' + msg)
		
		 
		 let outputText = document.getElementsByClassName('outputText')[0];
		 let elem = document.createElement('div');
		 elem.innerHTML = name +': '+ currentTime + msg;
		 if( outputText.childNodes.length == 0 ) {
			outputText.appendChild(elem);
			
		 } else {
			outputText.insertBefore( elem, outputText.childNodes[0] ); 			
			elem.style.borderBottom = '1px solid gray';
		 }
		 if( name == "" ) {
			 console.log('field is empty!')
			 elem.innerHTML = "";	
			 alert('You must be logged in to chatt!');
		 } else {
			 console.log("user is logged in")
			  elem.innerHTML = name +': '+ currentTime + ' ' + msg;
		 }
		 
		 
	 });
	 
	 uword.addEventListener('blur', function(event) {
		 console.log('show me on blur!')
		 let saveName = uword.value;
		 console.log('namnet sparades! ' + saveName)
		 localStorage.setItem('key',saveName);
		 let val = localStorage.getItem('key');
		 console.log('sparas i localStorage? ' + val)
	 });
	 logOutBtn.addEventListener('click', function(e) {
		localStorage.removeItem('key');
        console.log('namnet är borta ? ')		
	 });
	 
	 
	 
	    
		
});