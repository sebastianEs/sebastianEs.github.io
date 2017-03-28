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
  })
   .catch(function(error) {
	// Utloggning misslyckades
  });
  }
  
  let authBtn = document.getElementById('auth-btn');
  let showImg = document.getElementById('showImg');
  let showUser = document.getElementById('showUser');
  let logOutBtn = document.getElementById('logOut');
  let cont = document.getElementById('hide-container');
  let btnCont =document.getElementById('container');
  /*!!!!!!!!!!!!!!knapp events!!!!!!!!!!!!!!!!!*/
  authBtn.addEventListener('click', function(event) {
     cont.style.display="block";
     btnCont.style.visibility="hidden";
	 logInUser();
  });
  logOutBtn.addEventListener('click', function(event) {
	cont.style.display="none";
	btnCont.style.visibility="visible";
	logOutUser();
  })
  

