function checkRegExp () {
  this.submitElement = submitElem;
}

checkRegExp.prototype.validate = function() {
  if(patt.test(NumberElem.value)) {
    ResultElem.value = "true";
    return true;
  }
  else {
    ResultElem.value = "false";
    return false
  }
};

checkRegExp.prototype.bindEvents = function() {
  var _this = this;
  this.submitElement.addEventListener("click",function(e) {
  var result =  _this.validate();
  if(!result) {
    e.stopPropogation();
  }
  location.reload();
  });
};

function createRegExp () {
  var checkRegularExpression = new checkRegExp();
  checkRegularExpression.bindEvents();
}
var NumberElem = document.getElementById("numberId"),
    ResultElem = document.getElementById("resultId"),
    submitElem = document.getElementById("submitId"),
    str = "^[0-9]",
    patt = new RegExp(str);
window.onload = createRegExp();