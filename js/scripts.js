// Business Logic

function Number(dob) {
  this.dob = dob;
  Number.prototype.calculateNumber = function() {
    var numberArray = [];
    numberArray = dob.split("");
    console.log(numberArray);
  }
}


// User Interface Logic
$(document).ready(function(){
  $(".btn").click(function(e){
    e.preventDefault();
    var inputtedDob = $("input#dob-number").val();
    // if (dob.length != 8) {
    //   alert("Please enter your Date of Birth without any symbols and with all eight numbers before submitting.")
    // }
    var result = new Number(inputtedDob);
    Number.prototype.calculateNumber();
  });
});
