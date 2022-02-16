//variables
let godModeActive = false
let numSquares =3 
let array = []   
let squares = document.querySelectorAll(".square")
let container = document.querySelector(".container")
let colorDisplay = document.querySelector("#colorA")
let resetButton = document.querySelector("#nuevoColor")
let messageDisplay = document.querySelector("#mensaje")
let pickedColor
var modeButtons = document.querySelectorAll(".mode")
var clickedColor;
var game= {}
let h1 = document.querySelector("h1");
let godMode = document.querySelector("#god")
let normal = document.querySelectorAll("#normal")

//crear 1 color random
function makeColour (R,G,B){
    R = Math.floor(Math.random()*256);
    G = Math.floor(Math.random()*256);
    B = Math.floor(Math.random()*256);
    let newRgb = `rgb(` + R + `, ` + G + `, `+ B +`)`;
    return newRgb
}
//llenar el array de colores 
function llenar(b){     
    for (var i = 1; i <= b;i++ ){
        colorpush =makeColour ()
        array.push(colorpush)
    }
}
//elegir un color random
function pickColor(){
	var random = Math.floor(Math.random() * array.length);
	return array[random];
}
//poner colores 
function changeColors(array){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = array;
	}
}

//funcion reset 
function reset(a){
	if ( godModeActive == false){
	array=[]
	colors = llenar(a);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Nuevo Color"
	messageDisplay.innerHTML = " ";
	}
	else {		
		//arreglar aca 
		array=[]
		colors = makeColourGod ()
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "Nuevo Color"
		messageDisplay.innerHTML = " ";

	}
	for(var i = 0; i < squares.length; i++){
		if(array[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = array[i];
		} else {
			squares[i].style.display = "none";
		}
	}


	h1.style.backgroundColor = "steelblue";
}




//botones 
resetButton.addEventListener("click", function(){
	reset(numSquares);
})


function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				messageDisplay.innerHTML = "  ";
				colorDisplay.innerHTML = "Correct!";
				resetButton.innerHTML = "Play Again?";
				changeColors(pickedColor);
				h1.style.background = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.innerHTML = "¡Try Again!";
			}
		});
	}
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			godMode.classList.remove("selected");
			this.classList.add("selected");
            if (this.textContent === "Facil"){
				godModeActive = false
                numSquares = 3;
                reset(3);
            }else{
				godModeActive = false
                numSquares = 6;
                reset(6);
            }			
		});
	}
}

//ARRANCAR JUEGUITO
game.init = function(){
    setupModeButtons();
    setupSquares();
    reset(3);
}
game.init();


//god mode configuration 
function makeColourGod (R,G,B){
    R = Math.floor(Math.random()*206);
    G = Math.floor(Math.random()*206);
    B = Math.floor(Math.random()*206);    
	for (var i = 0; i <45; i++){
		let newRgb = `rgb(` + (R+i) + `, ` + (G+i) + `, `+ (B+i) +`)`;
		array.push(newRgb)
	}     
}



godMode.addEventListener ("click",function (){
	modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
godModeActive = true
reset ()
})