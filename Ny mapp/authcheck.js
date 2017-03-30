/*!!!!!!!!!login!!!!!!!!!!!!!!!!!!!!!!*/
 function logInUser() {
  let provider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
	
	let user = result.user;
  
	});
	}
	/*!!!!!!!!!!!!!logout!!!!!!*/
	function logOutUser() {
	firebase.auth().signOut()
    .then(function(result) {
	showUser.innerHTML="";
	showImg.src="";
	console.log("signed out!")
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
  secBtn.disabled=true;
  secImg.style.visibility="hidden";
  /*!!!!!!!!!!!!!!knapp events!!!!!!!!!!!!!!!!!*/
  authBtn.addEventListener('click', function(event) {
 
	 logInUser();	 
	 if( firebase.auth().currentUser.providerData[0].displayName === null ) {
		 showUser.innerHTML=firebase.auth().currentUser.providerData[0].email;
		 secBtn.disabled=false;
		 console.log('secret är tillgänglig')
	 } else {
		  showUser.innerHTML=firebase.auth().currentUser.providerData[0].displayName;
		  secBtn.disabled=false;
	 }
	 cont.style.display="block";
     btnCont.style.visibility="hidden";
	 showImg.src=firebase.auth().currentUser.providerData[0].photoURL;
  });
  secBtn.addEventListener('click', function(event) {
	  console.log("secret klick")
	 if( firebase.auth().currentUser.providerData[0].email !== null ) {
		 secImg.style.visibility="visible";
		 secImg.src="saywhatagain.jpg";
		 console.log("bilden visas!")
	 } else {
		 secImg.style.visibility="hidden";
		 console.log("bilden är borta!")
		 secImg.src="";
	 }
	 
	 
  });
  logOutBtn.addEventListener('click', function(event) {
	  logOutUser();
	cont.style.display="none";
	btnCont.style.visibility="visible";
    secBtn.disabled=true;
  })
  

