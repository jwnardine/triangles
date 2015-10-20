$(document).ready(function(){

var sideA = prompt("How long is the first side of your triangle?");
var sideB = prompt("How long is the second side of your triangle?");
var sideC = prompt("How long is the third side of your triangle?");

    if (sideA === sideB && sideB === sideC) {
    alert("Equalateral");
    }

    if (sideA === sideB && sideA !== sideC) {
    alert("Isosceles");
    }

    if (sideA !== sideB && sideA === sideC) {
    alert("Isosceles");
    }

    if (sideA !== sideB && sideA !== sideC && sideB === sideC) {
    alert("Isosceles");
    }

    if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
    alert("Scalene!");
    }
});
