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
                
                addBook();
            } else {
            addMoreBooks();
                 
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
    
        data.style.visibility = 'visible';
        apiKey = json.key;
        
    })
	.catch(function(error) {
		console.log('Something went wrong! ' + error );
		
	});
}


 
			
			
			
function addBook() {
    if (bookTitle.value == '' && bookAuthor.value == '') {
     
		varning.innerHTML ='Did you forget to search?'
    }
    else if (bookTitle.value == '') {
  

		varning.innerHTML ='Write any book title.'
    }
    else if (bookAuthor.value == '') {
      
		varning.innerHTML ='Write an Author.'
    }
    else {
		
        console.log('https://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key='+apiKey+'&title='+bookTitle.value+'&author='+bookAuthor.value);
        
	  if( apiKey === "" ) {
		  varning.innerHTML ='Missing Key, to make a search request api key.' 
	  } else {
		  getFetchInsert();
		   varning.innerHTML ='';
	  }
      
    }
}



let addMoreBooks = function() {
    fetch('https://www.forverkliga.se/JavaScript/api/crud.php?op=select&key='+apiKey)
    .then(function(response){
          return response.json();
          })
    .then(function(json){
        
        let booksFromApiStringed = json;
        console.log(booksFromApiStringed);
      
        
        
    

        if (json.status == "error"){
               
                addMoreBooks();
            } else {
          
                   addBookInput.innerHTML='';
				   for ( let i = 0; i < booksFromApiStringed.data.length; i++){
                     
                       bT = booksFromApiStringed.data[i].title;
                       bA = booksFromApiStringed.data[i].author;
                    
                   
					    let newInput = document.createElement('li');
                        newInput.innerHTML = "Titel: " +bT+ "  Author: "+ bA;
                        addBookInput.appendChild(newInput);
                };
         
               
            }
       });
};


/*''''''''''''''' KLICK EVENTS ''''''''''''''*/
window.onload = function () {
    apiBtn.addEventListener('click', function (event) {
        
	   
		getRequestKey();
		
    });
    pickBtn.addEventListener('click', function (event) {
		
		addBook();
       
    });
	
	
};



