/*!!!!!!!!!login!!!!!!!!!!!!!!!!!!!!!!*/
 function logInUser() {
  let provider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
	
	let user = result.user;
    console.log(result.user);
	});
	}
	/*!!!!!!!!!!!!!logout!!!!!!*/
	function logOutUser() {
	firebase.auth().signOut()
    .then(function(result) {
	// Utloggning lyckades
	console.log("signed out!")
  })
   .catch(function(error) {
	// Utloggning misslyckades
	console.log("something went wrong!")
  });
  }
  function show() {
	  let showImg = document.getElementById('showImg');
      let showUser = document.getElementById('showUser');
	 firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    console.log("user is logged in" + user.displayName)
   } else {
    console.log("user is not logged in" + user)
   }
});
   let user = firebase.auth().currentUser;

   if (user != null) {
     showImg=user.displayName;
   } else {
    console.log("user is not signed in")
   }
  }
  
  
  let authBtn = document.getElementById('auth-btn');
  let logOutBtn = document.getElementById('logOut');
  let cont = document.getElementById('hide-container');
  let btnCont =document.getElementById('container');
  /*!!!!!!!!!!!!!!knapp events!!!!!!!!!!!!!!!!!*/
  authBtn.addEventListener('click', function(event) {
     cont.style.display="block";
     btnCont.style.visibility="hidden";
	 logInUser();
	 show();
  });
  logOutBtn.addEventListener('click', function(event) {
	cont.style.display="none";
	btnCont.style.visibility="visible";
	logOutUser();
    
  })
  

