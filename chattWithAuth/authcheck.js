/*!!!!!!!!!login!!!!!!!!!!!!!!!!!!!!!!*/
 function logInUser() {
  let provider = new firebase.auth.GithubAuthProvider();
  
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
	if( firebase.auth().currentUser.providerData[0].displayName === null ) {
		 showUser.innerHTML=firebase.auth().currentUser.providerData[0].email;
		 secBtn.disabled=false;
		 console.log('secret är tillgänglig')
	 } else {
		  showUser.innerHTML=firebase.auth().currentUser.providerData[0].displayName;
		  secBtn.disabled=false;
	 }
	  
	let user = result.user;
	console.log(user)
	showImg.src=firebase.auth().currentUser.providerData[0].photoURL;
	});
	
	}
	function logInGoogle() {
		let providerG = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(providerG)
  .then(function(result) {
	if( firebase.auth().currentUser.providerData[0].displayName === null ) {
		 showUser.innerHTML=firebase.auth().currentUser.providerData[0].email;
		 secBtn.disabled=false;
		 
	 } else {
		  showUser.innerHTML=firebase.auth().currentUser.providerData[0].displayName;
		  secBtn.disabled=false;
	 }
	  
	let user = result.user;
	console.log(user);
	showImg.src=firebase.auth().currentUser.providerData[0].photoURL;
	});
	}
	/*!!!!!!!!!!!!!logout!!!!!!*/
	function logOutUser() {
	firebase.auth().signOut()
    .then(function(result) {
	console.log("signed out!")
	secBtn.disabled=true;
	secImg.src="";
  })
   .catch(function(error) {
	// Utloggning misslyckades
	console.log("something went wrong!")
  });
  }
  
   let showUser = document.getElementById('showUser');
   let showImg = document.getElementById('showImg');
  let secBtn = document.getElementById('secretBtn');
  let secImg = document.getElementById('secretImg');
  let authBtn = document.getElementById('auth-btn');
  let logOutBtn = document.getElementById('logOut');
  let cont = document.getElementById('hide-container');
  let btnCont =document.getElementById('container');
  let gooBtn = document.getElementById('goo-btn');
  secBtn.disabled=true;
  secImg.style.visibility="hidden";
  
  /*!!!!!!!!!!!!!!knapp events!!!!!!!!!!!!!!!!!*/
  authBtn.addEventListener('click', function(event) {
	 logInUser();	  
	 cont.style.display="block";
     btnCont.style.visibility="hidden";
  });
  secBtn.addEventListener('click', function(event) {
	  
	 if( firebase.auth().currentUser.providerData[0].email !== null ) {
		 secImg.style.visibility="visible";
		 secImg.src="saywhatagain.jpg";
		 
	 } else {
		 secImg.style.visibility="hidden";
		
	 }
	 
	 
  });
  gooBtn.addEventListener('click', function(event) {
	  logInGoogle();
	  cont.style.display="block";
      btnCont.style.visibility="hidden";
  })
  logOutBtn.addEventListener('click', function(event) {
	  logOutUser();
	cont.style.display="none";
	btnCont.style.visibility="visible";
    
  })
  

