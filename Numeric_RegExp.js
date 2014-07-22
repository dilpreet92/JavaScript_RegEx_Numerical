function checkNumericalRegExp (getElements) {
  this.NumberElement = getElements.NumberElem;
  this.ResultElement = getElements.ResultElem;
  this.submitElement = getElements.submitElem;
}

checkNumericalRegExp.prototype.validate = function() {
  var PATT = new RegExp(STR);
  return (PATT.test(this.NumberElement.value));
};

checkNumericalRegExp.prototype.setResultBoxValue = function(returnValue) {
  this.ResultElement.value = returnValue; 
};

checkNumericalRegExp.prototype.bindEvents = function() {
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

function createNumericalRegExp (getElements) {
  var checkRegularExpression = new checkNumericalRegExp(getElements);
  checkRegularExpression.bindEvents();
}

var STR = "^[0-9]+$";
var elements = {
  "NumberElem" : document.getElementById("numberId"),
  "ResultElem" : document.getElementById("resultId"),
  "submitElem" : document.getElementById("submitId")
}; 
window.onload = createNumericalRegExp(elements);