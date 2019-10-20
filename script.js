var colors=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]

var squares=document.querySelectorAll(".square");
var pickedColor=colors[3];
var colorDisplay=document.getElementById("colorDisplay");

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
            alert("correct");
        }else{
            //when answer is wrong then its color will change to background color
            this.style.backgroundColor="#232323";
        }
    })
}


