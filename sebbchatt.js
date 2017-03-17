
window.addEventListener('load', function() {

let msg = document.getElementById('mymessage');
function addmessage(message) {
   msg.innerHTML += ` <div>${message}</div> `;
}

 let uword = document.getElementById('inputWords'),
     udescribe = document.getElementById('describetext'),
     postBtn = document.getElementById('button');
	 
	 postBtn.addEventListener('click', function(event) {
		 let w = uword.value;
		 let d = udescribe.value;
		 firebase.database().ref('/words' + w).set({
			 text: d
		 });
		 addmessage(`sebbchatt : ${w}={d}`);
	 });
});