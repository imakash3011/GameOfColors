// var colors=[
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"
// ]

var numSquares=6;
var colors=generateRandomColors(numSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }else {
            //to hide all other blocks 
            squares[i].style.display="none";
        }   
    }
})

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){

            squares[i].style.background=colors[i];
            squares[i].style.display="block";
       
    }
})

resetButton.addEventListener("click",function(){
    // alert("Clicked ");
    //generate all new colors
    colors=generateRandomColors(numSquares);
    //pick a new random color from array
     pickedColor=pickColor();
    //change the colorDisplay to match picked Color
    colorDisplay.textContent=pickedColor;
    this.textContent="New Colors";

    messageDisplay.textContent="";
    //change colors of squares
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
    h1.style.background="steelblue";
})

colorDisplay.textContent=pickedColor;


for(var i=0;i<squares.length;i++ ){
    //added initial color to the sqaures
    squares[i].style.backgroundColor=colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor=this.style.backgroundColor;

        //compare color to pickedColor
        if(clickedColor===pickedColor){
            messageDisplay.textContent= "Correct";
            resetButton.textContent="Play Again!"
            //it will make all the color of square same as correct answer square
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }else{
            //when answer is wrong then its color will change to background color
            this.style.backgroundColor="#232323";
            messageDisplay.textContent= "Try Again !!";
        }
    })
}


function changeColors(color){
    //loop through all coureses
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array 
    var arr=[]
    //add num random colors to array
    for(var i=0;i<num;i++){
        arr.push(randomColors())
        //get random color and push into arr
    }
    //return that array
    return arr;
}

function randomColors(){
    //pick a "red" from 0-255
    var r=Math.floor(Math.random()*256)
     //pick a "red" from 0-255
     var g=Math.floor(Math.random()*256)
      //pick a "red" from 0-255
   var b= Math.floor(Math.random()*256)

//    "rgb(r,g,b)"
//maintain the sequence otherwise it will through an error 
    return "rgb(" + r + ", " + g + ", " + b + ")";
   
}

