function Equilateral(side1 , side2 , side3){
    if(side1 === side2 && side1 === side3 && side2 === side1 && side2 === side3 && side3 === side1 && side3 === side2){
        return true;
    } else{
        return false;
    }
}
function Isoceles(side1 , side2 , side3){
    if(side1 === side2 || side1 === side3 || side2 === side3){
        return true;
    }
    else{
        return false;
    }
}
function scalene(side1 , side2 , side3){
    if(side1 !== side2 && side2 !== side3 && side1 !== side3 && side2 !== side1 && side3 !== side2 && side3 !== side1){
        return true;   
    }else{
        return false;
    }
} 
function notTriangle(side1 , side2 , side3){
    if(side1 < side2 + side3 || side2 < side1 +side3 || side3 < side1 + side2){
        return true
    }else{
        return false;
    }
}