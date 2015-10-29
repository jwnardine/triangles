var triangle = function(sideA,sideB,sideC) {

  // if (sideA === null || sideB === null || sideC === null) {
  //   return "Unknown";
  // }

  if (sideA === sideB && sideB === sideC) {
  alert("Your triangle is Equalateral");
  return "Equilateral";
  }

  if ((sideA + sideB) <= sideC) {
  alert("This is not a triangle");
  return "Unknown";
  }

  if (sideA === sideB && sideA !== sideC) {
  alert("Your triangle is Isosceles");
  return "Isosceles";
  }

  if ((sideA + sideC) <= sideB) {
  alert("This is not a triangle");
  return "Unknown";
  }

  if (sideA !== sideB && sideA === sideC) {
  alert("Your triangle is Isosceles");
  return "Isosceles"
  }

  if ((sideB + sideC) <= sideA) {
  alert("This is not a triangle");
  return "Unknown";
  }

  if (sideA !== sideB && sideA !== sideC && sideB === sideC) {
  alert("Your triangle is Isosceles");
  return "Isosceles"
  }

  if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
  alert("Your triangle is Scalene!");
  return "Scalene"
  }







};

$(document).ready(function(){
  $("#click_me").submit(function(event) {
    var sideA = parseInt(prompt("How long is the first side of your triangle?"));
    var sideB = parseInt(prompt("How long is the second side of your triangle?"));
    var sideC = parseInt(prompt("How long is the third side of your triangle?"));

    triangle(sideA,sideB,sideC);
    event.preventDefault();
  });
});
