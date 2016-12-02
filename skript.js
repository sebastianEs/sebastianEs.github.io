//       canvas lab3

//    !! variablar !!

let clear = document.getElementById('clearBtn'),
    circleBtn = document.getElementById('circleBtn'),
    rectangleBtn = document.getElementById('rectangleBtn'),
    triBtn = document.getElementById('tringleBtn'),
    exportBtn = document.getElementById('expoBtn'),    
    deltBtn = document.getElementById('delete'),
    expoFig = document.getElementById('exportFig'),
	selectColor = document.getElementById('selectColor')
	submitColor = document.getElementById('submitColor')
	hexColor = document.getElementById('hex-color'),
    hexColors ='^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
	json = document.getElementById('JSON-div'),
    userCircle = false,
    userRect = false,
    userTri = false,	
    clickCount = 0,
	statusBar = document.getElementById('statusBar'),
	statusBar1 = document.getElementById('statusBar1'),
	menu = document.getElementById('menuBtn'),
	canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	e = document.getElementById('dropdown'),
	myPosistion = [];
    let colorCheck;


	
	
	

	
	
//     !! events !!
// click events på alla knappar samt mouse events för att se vad användaren gör.

canvas.addEventListener('click', function(event){
  let position = currentPosition(canvas,event);
  
});
canvas.addEventListener('mousemove', function(evn){
  let position = currentPosition(canvas,evn);
  let output ='mouse position: ' + position.x + ',' + position.y;
  statusBar1.innerHTML = output;  
});

//       öppnar menyn

menu.addEventListener('click', function(event){
  if( e.style.display == 'none') {
    e.style.display='block';
    statusBar.innerHTML='open menu';
  } else {
    e.style.display='none';
    statusBar.innerHTML = 'closed menu';
  }
});
menu.addEventListener('mouseenter', function() {
	menu.style.cursor = 'pointer';
	statusBar.innerHTML ='click on menu for more options';
});

//      rensar canvasens innehåll

clear.addEventListener('mouseenter', function() {
	clear.style.cursor = 'pointer';
	statusBar.innerHTML ='click here to clear your work';
});
clear.addEventListener('click', function(event) {
	reset();
	context.clearRect(0,0,750,450);
	statusBar.innerHTML ='your work has been erased';
	console.log("allt borta?")
});

//        stoppar pågående figur

deltBtn.addEventListener('mouseenter', function() {
	deltBtn.style.cursor = 'pointer';
	statusBar.innerHTML ='click here to cancel your work';
});
deltBtn.addEventListener('click', function(event) {
	statusBar.innerHTML ='your work has been canceled';
	myPosistion = 0;
	userCircle = false;
	userTri = false;
	userRect = false;
	
});

//   exportera till JSON funkar ej!

exportBtn.addEventListener('mouseenter', function() {
	exportBtn.style.cursor = 'pointer';
	statusBar.innerHTML ='click here to send your work to JSON';
});
exportBtn.addEventListener('click', function(event) {
	if(json.style.display ='none') {
		json.style.display ='block';
		let text = JSON.stringify(myPosistion);
		json.innerHTML ='coordinates :' + text;
	} else {
	json.style.display ='none';
	statusBar.innerHTML ='no content';
	};
	
})

//        click och mouse events för färger

submitColor.addEventListener('mouseenter', function(){
	statusBar.innerHTML ='click here if you want to add color';
} )
submitColor.addEventListener('click', function(event){
	if(hexColor.value.length == 7 && hexColor.value != undefined) {
		if(validColor(hexColor.value) == true ) {
			let userInput = document.createElement('option');
			selectColor.appendChild(userInput);
			userInput.innerHTML =hexColor.value;
			statusBar.innerHTML = 'you picked :' + selectColor.options[selectColor.selectedIndex].value;
		} else {
			statusBar.innerHTML ='not valid :';
		}
	}
	
	
	/*if(colorCheck.value == true && userInput.value != undefined) {
    let newColor =document.createElement('option');
	let userInput;
	userInput = hexColor.value.toLowerCase;
	newColor.value = userInput;
	selectColor.appendChild(newColor);
	newColor.innerHTML = userInput.value;
	statusBar.innerHTML ='you picked :' + selectColor.options[selectColor.selectedIndex].value;
	}*/
	
} )


selectColor.addEventListener('mouseenter', function(){
	statusBar.innerHTML = 'click here to pick color ';
} )


hexColor.addEventListener('mouseenter', function(){
	statusBar.innerHTML ='add color with hex code';
	
} )
hexColor.addEventListener('keyup', function(event){		
		let dot ='';
	    if(hexColor.value.match(hexColors) !== null){
		statusBar.innerHTML ='this is a valid color';
		colorCheck = true;
		submitColor.disabled = false;
	} else if (hexColor.value.match(hexColors) == null || hexColor.value == ''){
		statusBar.innerHTML ='not valid';
		colorCheck = false;
		submitColor.disabled = true;
	}
	
} )
//      knapp för cirkel

circleBtn.addEventListener('click', function(event){
   reset();
   userCircle = true;
   statusBar.innerHTML = 'you chosed to draw a circle';
});
circleBtn.addEventListener('mouseenter', function() {
	circleBtn.style.cursor = 'pointer';
	statusBar.innerHTML ='click here to draw a circle';
});

//      knapp för triangel

triBtn.addEventListener('click', function(event) {
    reset();
	userTri = true;
	statusBar.innerHTML ='you chosed to draw a triangle';
	console.log("triangeln lever")
});
triBtn.addEventListener('mouseenter', function(event){
	triBtn.style.cursor ='pointer';
	statusBar.innerHTML ='click here to draw a triangle';
});

//       knapp för rektangel

rectangleBtn.addEventListener('mouseenter', function() {
	rectangleBtn.style.cursor = 'pointer';
	statusBar.innerHTML ='click here to draw a rectangle';
});

rectangleBtn.addEventListener('click', function(event){
   reset();
   userRect = true;
   statusBar.innerHTML = 'you chosed to draw a rectangle';
  
});




// functioner för att rita på canvas 


canvas.addEventListener('click', function (event) {
    let cord = [];
    let rect = canvas.getBoundingClientRect();
    cord.push(event.clientX - rect.left);
    cord.push(event.clientY - rect.top);
	console.log("My cords: "+cord);
	
	
   if(userCircle === true && clickCount===0){
    clickCount++;
	myPosistion.push(cord);
    
  } else if (userCircle === true && clickCount===1) {
	  myPosistion.push(cord);
    let radius = Math.hypot(myPosistion[1][0] - myPosistion[0][0], myPosistion[1][1] - myPosistion[0][1]);
    let circleFig = new Circle(myPosistion[0][0], myPosistion[0][1], radius);
    circleFig.draw();
    statusBar.innerHTML ='you created a Circle!';
	clickCount = 0;
	myPosistion = [];

	
  }   else if(userRect == true && clickCount<=0) {
	  clickCount++;
	  myPosistion.push(cord);
	  
  } else if(userRect == true && clickCount == 1) {
	myPosistion.push(cord);
	let rectangleFig = new Rectangle(myPosistion[0][0], myPosistion[0][1], myPosistion[1][0], myPosistion[1][1]);
	rectangleFig.draw();
	
	statusBar.innerHTML ='you created a rectangle';
	clickCount= 0;
	myPosistion = [];
	
	
  } 
   else if(userTri == true && clickCount <= 1) {
	  clickCount++;
	  myPosistion.push(cord);
  } else if(userTri == true && clickCount == 2) {
	  myPosistion.push(cord);
  let triangleFig = new Triangle(myPosistion[0][0], myPosistion[0][1], myPosistion[1][0], myPosistion[1][1], myPosistion[2][0], myPosistion[2][1]);
	  triangleFig.draw();
	  statusBar.innerHTML = 'you created a triangle';
      clickCount = 0;
	  myPosistion = [];
	 
  }
});

//     färger till canvas figurer

function changeColor() {
	context.strokeStyle = selectColor.options[selectColor.selectedIndex].value;
}
function validColor(list) {
	let colorOk =['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
	let colorCount =0;
	list =list.toUpperCase();
	if(list.charAt(0) == '#') {
		for(let i=1; i<7; i++) {
			for(let s=0; s<colorOk.length; s++) {
				if(list.charAt(i) == colorOk[s] ){
					colorCount++;
					break;
				}
			}
		}
	}
	if(colorCount == 6) {
		return true;
	} else {
		return false;
	}
	
}

//       function som ger canvasens koordinater


function currentPosition(canvas,evn) {
    let rect = canvas.getBoundingClientRect();
    return {
            x: evn.clientX - rect.left,
            y: evn.clientY - rect.top
    }
};

	
//      reset function till alla rit events

function reset(){
		myPosistion = [];
		clickCount = 0;
		userCircle = false;
		userRect = false;
		userTri = false;
	};



 
//      !! Circle !!

function Circle(centerX, centerY, radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.draw = function() {
        context.beginPath();
		changeColor();
        context.arc(this.centerX,this.centerY,this.radius,0,2*Math.PI);
        context.stroke();
        context.closePath();   
        
    
}
    
};
 

   


//      !! Triangle !!

function Triangle(x1, y1, x2, y2, x3, y3) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.draw = function() {
    context.beginPath();
	changeColor();
    context.moveTo(this.x1,this.y1);
    context.lineTo(this.x2,this.y2);
    context.lineTo(this.x3,this.y3);
	context.lineTo(this.x1,this.y1);
    context.closePath();
	context.stroke();

     
}

};

    //  !! Rectangle !!
	
	
function Rectangle(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y1;
	this.x3 = x2;
    this.y3 = y2;
    this.x4 = x1;
    this.y4 = y2;
    this.draw = function() {
    context.beginPath();
	changeColor();
    context.moveTo(this.x1,this.y1);
    context.lineTo(this.x2,this.y2);
	context.lineTo(this.x3,this.y3);
    context.lineTo(this.x4,this.y4);
    context.closePath();
	context.stroke();
    
}

};