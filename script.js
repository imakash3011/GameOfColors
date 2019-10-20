var colors=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");

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
            //it will make all the color of square same as correct answer square
            changeColors(clickedColor);
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


