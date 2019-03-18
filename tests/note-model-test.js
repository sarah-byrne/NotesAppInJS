describe("Note", function(){
  it("test it stores text",function() {
      note = new Note("My favourite language is JS");
      assert.isEqual(note.getText(), "My favourite language is JS");
  });
});
