function Equilateral(side1 , side2 , side3){
    if(side1 === side2 && side2 === side1 && side3 === side1 && side2 === side3 && side3 === side1 && side3 === side2){
        return true;
    } else{
        return false;
    }
}

function isosceles(side1, side2, side3) {
   
     if (side1 === side3 || side2 === side3 || side1 === side2) {
        return true;
    }
    else{
        return false;
    }
}

function scalene(side1 , side2 , side3){
    if(Equilateral(side1, side2, side3)) {
        return false;
    }

    else if(isosceles(side1, side2, side3)){
        return false;   
    }
    else{
        return true;
    }
} 

function notTriangle(side1 , side2 , side3){
    if(side1 + side2 < side3 || side2 + side3 < side1 || side3 + side1 <side2){
        return true
    }else{
        return false;
    }
}

$(document).ready(function(){
    $("#triangle").submit(function(event){
        event.preventDefault();
        const firstSide = parseInt($("#side1").val());
        const secondSide = parseInt($("#side2").val());
        const thirdSide = parseInt($("#side3").val());

        if(Equilateral(firstSide , secondSide , thirdSide)){
            $("#result").text("Equilateral Triangle")
        } 
        else if(notTriangle(firstSide, secondSide, thirdSide)) {
            $("#result").text("cannot form a triangle");
        }
        else if(isosceles(firstSide , secondSide , thirdSide)){
            $("#result").text("Isoceles Triangle")
        }
        
       
        else if(scalene(firstSide , secondSide , thirdSide)){
            $("#result").text("Scalene Triangle")
        }
        
    })
})