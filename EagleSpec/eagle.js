(function(exports){
  var describe = function(string, callback){
    callback()
  }

  var it = function(string, callback){
    try {
      callback()
      document.write((":) " + string))
    } catch(e) {
      document.write((":( " + string +"<br>"+ e))
    }


  }

  var assert = {
    isEqual: function(testObj, expectedResult) {
        if (!(testObj === expectedResult)) {
            throw new Error("Expected: " + expectedResult + " ...But got: " + testObj )
        }
    }
  }

  exports.describe = describe
  exports.it = it
  exports.assert = assert

})(this)
