let pickBtn = document.getElementsByClassName('pick-btn')[0]
    , apiBtn = document.getElementById('api-btn')
    , data = document.getElementById('returnKey')
    , bookTitle = document.getElementById('title')
    , bookAuthor = document.getElementsByClassName('author')[0];
let addBookInput = document.getElementById('displayBooks');
let apiKey = '';
let bT ='', bA ='';
let responseInput = '';
let bookinputArray = [];
let varning = document.getElementById('varning');
/*       fetchfunktion    */
let getFetchInsert = function () {
        fetch('https://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key='+apiKey+'&title='+bookTitle.value+'&author='+bookAuthor.value)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            //saveBooks = bookTitle.value + bookAuthor.value;
            let stringy = JSON.stringify(json);
            console.log("status på stringy :"+stringy);
            
            // Check for error
            if (json.status == "error"){
                console.log("En gång till");
                addBook();
            } else {
            addMoreBooks();
                 console.log("SLUT");
            }
            })
			.catch(function(error) {
		      
			  console.log('Something went wrong! ' + error );
		      
			});
			
			}
/*'''''''''''''''' API FUNCTIONS ''''''''''''''''''''''''*/
function getRequestKey() {
    let urlKey = "https://www.forverkliga.se/JavaScript/api/crud.php?requestKey";
    fetch(urlKey).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (json) {
        data.innerHTML = `${json.key}` + ' :';
        console.log(json);
        data.style.visibility = 'visible';
        apiKey = json.key;
        console.log(apiKey);
    })
	.catch(function(error) {
		console.log('Something went wrong! ' + error );
		
	});
}


 
			
			
			
function addBook() {
    if (bookTitle.value == '' && bookAuthor.value == '') {
        console.log('skriv något!');
		varning.innerHTML ='Write something'
    }
    else if (bookTitle.value == '') {
        console.log('skriv en titel :');
		varning.innerHTML ='Write any book title'
    }
    else if (bookAuthor.value == '') {
        console.log('skriv en författare :');
		varning.innerHTML ='Write any Author.'
    }
    else {
		
        console.log('https://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key='+apiKey+'&title='+bookTitle.value+'&author='+bookAuthor.value);
       
	  if( apiKey === "" ) {
		  varning.innerHTML ='Assign key!' 
	  } else {
		  getFetchInsert();
	  }
        //Var ska errorChecker sättas in?
        //Apichecker för inloggning
        //Hämta böcker
        
            
           // addBookInput.innerHTML = 'Titel : ' + bookTitle.value + ' :' + ' Author :' + bookAuthor.value;
        console.log("Current saved books:: https://www.forverkliga.se/JavaScript/api/crud.php?op=select&key="+apiKey);
        
    }
}



let addMoreBooks = function() {
    fetch('https://www.forverkliga.se/JavaScript/api/crud.php?op=select&key='+apiKey)
    .then(function(response){
          return response.json();
          })
    .then(function(json){
        console.log(json);
        let booksFromApiStringed = json;
        console.log(booksFromApiStringed);
        console.log(json.status);
        
        
    
        //Check for error
        if (json.status == "error"){
                console.log("Error from addMoreBooks");
                addMoreBooks();
            } else {
                console.log("No error from addMoreBooks"+booksFromApiStringed);
                   addBookInput.innerHTML='';
				   for ( let i = 0; i < booksFromApiStringed.data.length; i++){
                       console.log(booksFromApiStringed.data[i].title);
                       bT = booksFromApiStringed.data[i].title;
                       bA = booksFromApiStringed.data[i].author;
                    
                       console.log("inne i forloop");
					    let newInput = document.createElement('li');
                        newInput.innerHTML = "Titel: " +bT+ "  Author: "+ bA;
                        addBookInput.appendChild(newInput);
                };
                //Create element to NewInput
               
            }
       });
};



/*function inputChecker() {
	if( apiKey === '' ) {
		
		console.log('STOP!');
		varning.innerHTML ='You need an api key to search for books!';
		pickBtn.disabled = true;
	} else {
		pickBtn.disabled = false;
		console.log('GO!');
		getFetchInsert();
	}
}*/
function changeBook() {
    //  en function som ändrar input och återställer nuvarande bok.
    //  när man klickar på knappen ska sidans innehåll ändras.
}
function removeAll() {
    //  en function som tar bort allt och visar sidan som vid start.
    //  när man klickar på knappen ska sidan återställas till startläge
}

/*''''''''''''''' KLICK EVENTS ''''''''''''''*/
window.onload = function () {
    apiBtn.addEventListener('click', function (event) {
        
	   
		getRequestKey();
		
    });
    pickBtn.addEventListener('click', function (event) {
		
		addBook();
       
    });
	
	
};
/*
function deleteContent() {
// en function som radderar den aktuella sökningen.
}
*/


