// Business Logic

function Number(dob) {
  this.dob = dob;
  Number.prototype.calculateNumber = function() {
    var strings = dob.split("");
    for (var i = 0; i < strings.length; i++) {
      strings[i] = parseInt(strings[i]);
    }
    for (var i = 0, sum = 0; i <= strings.length; sum += strings[i++]){
      var number = sum;
    }
    if (number > 9) {
      number = number.toString().split("");
      for (var i = 0; i < number.length; i++) {
         number[i] = parseInt(number[i]);
      }
      number = number[0] + number[1];

    }
    if (number === 1) {
      $(".one").show();
    } else if (number === 2) {
      $(".two").show();
    } else if (number === 3) {
      $(".three").show();
    } else if (number === 4) {
      $(".four").show();
    } else if (number === 5) {
      $(".five").show();
    } else if (number === 6) {
      $(".six").show();
    } else if (number === 7) {
      $(".seven").show();
    } else if (number === 8) {
      $(".eight").show();
    } else if (number === 9){
      $(".nine").show();
    }
  }
}


// User Interface Logic
$(document).ready(function(){
  $(".btn").click(function(e){
    e.preventDefault();
    var inputtedDob = $("input#dob-number").val();
    if (inputtedDob.length != 8) {
      alert("Please enter your Date of Birth without any symbols and with all eight numbers before submitting.")
    } else {
    var result = new Number(inputtedDob);
    Number.prototype.calculateNumber();
  }
  });
});
