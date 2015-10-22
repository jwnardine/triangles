var triangle = function(sideA,sideB,sideC) {
  if ((sideA + sideB) < sideC) {
  alert("This is not a triangle");
  return "Unknown";
  }

  if ((sideA + sideC) < sideA) {
  alert("This is not a triangle");
  return "Unknown";
  }

  if ((sideB + sideC) < sideA) {
  alert("This is not a triangle");
  return "Unknown";
  }

  if (sideA === null || sideB === null || sideC === null) {
    return "Unknown";
  }

  if (sideA === sideB && sideB === sideC) {
  alert("Equalateral");
  return "Equilateral";
  }

  if (sideA === sideB && sideA !== sideC) {
  alert("Isosceles");
  return "Isosceles";
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
};

$(document).ready(function(){
  $("#click_me").submit(function(event) {
    var sideA = prompt("How long is the first side of your triangle?");
    var sideB = prompt("How long is the second side of your triangle?");
    var sideC = prompt("How long is the third side of your triangle?");

    triangle(sideA,sideB,sideC);
    event.preventDefault();
  });
});
