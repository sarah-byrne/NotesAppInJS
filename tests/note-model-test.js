var assert = {
    isEqual: function(testObj, expectedResult) {
        if (!(testObj === expectedResult)) {
            throw new Error(testObj + " is not equal to " + expectedResult)
        }
    }
}

function testItStoresText() {
    note = new Note("My favourite language is JS");
    assert.isEqual(note.text, "My favourite language is JS");
}

testItStoresText();