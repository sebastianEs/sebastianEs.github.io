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
	myPosistion = [],
	savedContent = [];
	


	
	
	

	
	
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
	statusBar.innerHTML ='canvas work exported to JSON'
   	let work =JSON.stringify(myPosistion);
	json.innerHTML ='coordinates :' + work;
	
})

//        click och mouse events för färger, fungerar ej returnerar none

submitColor.addEventListener('mouseenter', function(){
	statusBar.innerHTML ='click here if you want to add color';
} )
submitColor.addEventListener('click', function(event){
	let colorCeck;
	if(hexColor.value.match(hexColors) !== null){
		statusBar.innerHTML ='you picked :' + selectColor.options[selectColor.selectedIndex].value;
		colorCeck = true;
	} else if (hexColor.value.math == null){
		statusBar.innerHTML ='fail';
		colorCeck = false;
	}
	
} )


selectColor.addEventListener('mouseenter', function(){
	statusBar.innerHTML = 'click here to pick color ';
} )


hexColor.addEventListener('mouseenter', function(){
	statusBar.innerHTML ='add color with hex code';
	
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
	console.log("En cirkel är kommen")
	myPosistion.push(cord);
	console.log("MY POS: "+myPosistion);
    
  } else if (userCircle === true && clickCount===1) {
	  myPosistion.push(cord);
	  console.log("MY POS 2: "+myPosistion);
    let radius = Math.hypot(myPosistion[1][0] - myPosistion[0][0], myPosistion[1][1] - myPosistion[0][1]);
	console.log("RADDE: "+radius);
    let circleFig = new Circle(myPosistion[0][0], myPosistion[0][1], radius);
    console.log(circleFig)
    circleFig.draw();
    statusBar.innerHTML ='you created a Circle!';
	clickCount = 0;
	myPosistion = [];

	
  }    else if(userRect == true && clickCount<=0) {
	  clickCount++;
	  myPosistion.push(cord);
	  console.log("my pos 3: " + myPosistion);
	  
  } else if(userRect == true && clickCount == 1) {
	  myPosistion.push(cord);
	  console.log("my pos 4: " + myPosistion);
	let rectangleFig = new Rectangle(myPosistion[0][0], myPosistion[0][1], myPosistion[1][0], myPosistion[1][1]);
	console.log("rect är: "+ rectangleFig)
	rectangleFig.draw();
	
	statusBar.innerHTML ='you created a rectangle';
	console.log("yey it worked");
	clickCount= 0;
	myPosistion = [];
	
	
  } 
   else if(userTri == true && clickCount <= 1) {
	  clickCount++;
	  myPosistion.push(cord);
	  console.log("pos 5: " + myPosistion)
  } else if(userTri == true && clickCount == 2) {
	  myPosistion.push(cord);
  let triangleFig = new Triangle(myPosistion[0][0], myPosistion[0][1], myPosistion[1][0], myPosistion[1][1], myPosistion[2][0], myPosistion[2][1]);
	  console.log('pos 6: ' + myPosistion);
	  triangleFig.draw();
	  statusBar.innerHTML = 'you created a triangle';
	  console.log('där satt den');
      clickCount = 0;
	  myPosistion = [];
	 
  }
});

//     färger till canvas figurer

function changeColor() {
	context.strokeStyle = selectColor.options[selectColor.selectedIndex].value;
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
   this.area = function()  {
    return Math.PI(this.radius * this.radius);
};
   this.move = function(dx, dy) {
    this.centerX=this.centerX+=dx;
    this.centerY=this.centerY+=dy;
};
   this.points = function() {
    return [{x: this.centerX, y: this.centerY}];
};
   this.distanceTo = function(otherCircle) {
      let len = Math.sqrt(Math.pow(this.centerX - otherCircle.centerX, 2) 
      + Math.pow(this.centerY - otherCircle.centerY, 2));
      let dis = len - this.radius - otherCircle.radius;  
      if( dis < 0) {
        return dis;
      }
      else if ( dis <= 0 ) {
        return 0;
      }
};

   this.boundingBox = function() {
    let littleY =this.centerY - this.radius;
    let littleX =this.centerX - this.radius;
    let bigY = this.centerY + this.radius;
    let bigX = this.centerX + this.radius ;
  
    return new Rectangle (littleX, littleY, bigX, bigY);    
    
    
};
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
this.area = function() {
    return Math.abs((this.x1*(this.y2-this.y3) + this.x2*(this.y3 - this.y1) + this.x3*(this.y1 - this.y2))/2);
  
};

this.move = function(dx, dy) {
    
    x1=this.x1+=dx;
    x2=this.x2+=dx;
    x3=this.x3+=dx;
    y1=this.y1+=dy;
    y2=this.y2+=dy;
    y3=this.y3+=dy;
 };
this.points = function() {
    return [{x: this.x1, y:this.y1}, {x:this.x2, y:this.y2}, {x:this.x3, y:this.y3}];
};
this.boundingBox = function() {
    let highX = Math.max(this.x1,this.x2, this.x3);
    let lowX = Math.min(this.x1, this.x2, this.x3);
    let highY = Math.max(this.y1, this.y2, this.y3);
    let lowY = Math.min(this.y1, this.y2, this.y3);
    
    return new Rectangle(lowX, lowY, highX, highY);
};
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
this.area = function() {
    return  Math.sqrt(this.x1 - this.x2) * (this.y1 - this.y2) * (this.x1 - this.x2) * (this.y1 - this.y2) ;
};
this.move = function(dx, dy) {
    x1=this.x1+=dx;
    x2=this.x2+=dx;
    y1=this.y1+=dy;
    y2=this.y2+=dy;
 };
this.points = function() {
    return [{x: this.x1, y:this.y1},{x:this.x2, y:this.y2},{x:this.x2, y:this.y1}, {y:this.y2, x:this.x1}];
};
this.distanceTo = function(otherRectangle) {
        let midX1 = (this.x1 + this.x2) /2;
        let midY1 = (this.y1 + this.y2) /2;
        let midX2 = (otherRectangle.x1 + otherRectangle.x2) /2;
        let midY2 = (otherRectangle.y1 + otherRectangle.y2) /2;
        let a = midX1 - midX2;
        let b = midY1 - midY2;
        return Math.sqrt(a*a + b*b);
};
};