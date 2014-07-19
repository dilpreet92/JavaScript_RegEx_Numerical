function checkNumericalRegExp () {
  this.str = "^[0-9]+$";
}

checkNumericalRegExp.prototype.validate = function() {
  var patt = new RegExp(this.str);
  return (patt.test(NumberElem.value));
};

checkNumericalRegExp.prototype.setResultBoxValue = function(returnValue) {
  ResultElem.value = returnValue; 
};

checkNumericalRegExp.prototype.bindEvents = function() {
  var _this = this;
  submitElem.addEventListener("click",function(e) {
    if (_this.validate()) {
      _this.setResultBoxValue("true");
    }
    else { 
      _this.setResultBoxValue("false");
      e.stopPropogation();
    }
  });
};

function createNumericalRegExp () {
  var checkRegularExpression = new checkNumericalRegExp();
  checkRegularExpression.bindEvents();
}
var NumberElem = document.getElementById("numberId"),
    ResultElem = document.getElementById("resultId"),
    submitElem = document.getElementById("submitId");
window.onload = createNumericalRegExp();