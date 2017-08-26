// Business Logic

function Number(dob) {
  this.dob = dob;
  Number.prototype.calculateNumber = function() {
    var strings = dob.split("");
    for (var i = 0; i < strings.length; i++) {
      strings[i] = parseInt(strings[i]);
    }
    console.log(strings);
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
