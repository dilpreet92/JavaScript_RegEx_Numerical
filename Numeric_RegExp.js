function checkNumericality (getElements) {
  this.numberElement = getElements.numberElement;
  this.resultElement = getElements.resultElement;
  this.submitElement = getElements.submitElement;
}

checkNumericality.prototype.STR = "^[0-9]+$";

checkNumericality.prototype.validate = function() {
  var PATT = new RegExp(this.STR);
  return (PATT.test(this.numberElement.value));
};

checkNumericality.prototype.setResultBoxValue = function(returnValue) {
  this.resultElement.value = returnValue; 
};

checkNumericality.prototype.bindEvents = function() {
  var _this = this;
  this.submitElement.addEventListener("click",function(e) {
    if (_this.validate()) {
      _this.setResultBoxValue("true");
    }
    else { 
      _this.setResultBoxValue("false");
      e.stopPropogation();
    }
  });
};
 
window.onload = function() {
  var elements = {
    "numberElement" : document.getElementById("numberId"),
    "resultElement" : document.getElementById("resultId"),
    "submitElement" : document.getElementById("submitId")
  };
  var checkRegularExpression = new checkNumericality(elements);
  checkRegularExpression.bindEvents();
}