var color = ["green","cyan","black","voilet","blue","yellow","purple","orange","lightgreen","lemon"];
var index = 0;
var isTriangle = false;

var changeColor = document.getElementById("change_color");
var changeShape = document.getElementById("change_shape");

changeColor.addEventListener("click", colorFunction);
changeShape.addEventListener("click", shapeFunction);   


function colorFunction(){
    if(index === color.length){
        index = 0;
    }
    document.getElementById("circle").style.backgroundColor = color[index];
    index++;
}

function shapeFunction(){
    if(!isTriangle){
        var shape = document.getElementsByClassName("inner")[0];
        shape.className = "triangle-bottom-left";
        isTriangle = true;
    }else{
        var shape = document.getElementsByClassName("triangle-bottom-left")[0];
        shape.className = "inner";
        isTriangle = false;
    }
}

