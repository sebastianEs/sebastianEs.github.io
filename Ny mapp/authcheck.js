
 var config = {
    apiKey: "AIzaSyAFXG0D7RwP7VSISZ2PANf4ISN9Y1TmBDU",
    authDomain: "authcheck-d66dd.firebaseapp.com",
    databaseURL: "https://authcheck-d66dd.firebaseio.com",
    storageBucket: "authcheck-d66dd.appspot.com",
    messagingSenderId: "1053363999524"
  };
  firebase.initializeApp(config);

  let provider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
	
	let user = result.user;

	});
