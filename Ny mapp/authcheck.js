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
  /*!!!!!!!!!!!!!!knapp events!!!!!!!!!!!!!!!!!*/
  authBtn.addEventListener('click', function(event) {
     cont.style.display="block";
     btnCont.style.visibility="hidden";
	 logInUser();	 
	 if( firebase.auth().currentUser.providerData[0].displayName === null ) {
		 showUser.innerHTML=firebase.auth().currentUser.providerData[0].email;
		 secBtn.disabled=false;
		 console.log('secret är tillgänglig')
	 } else {
		  showUser.innerHTML=firebase.auth().currentUser.providerData[0].displayName;
		  secBtn.disabled=false;
	 }
	 showImg.src=firebase.auth().currentUser.providerData[0].photoURL;
	 
  });
  logOutBtn.addEventListener('click', function(event) {
	cont.style.display="none";
	btnCont.style.visibility="visible";
	logOutUser();
    
  })
  

