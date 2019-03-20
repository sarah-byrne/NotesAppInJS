describe("SingleNoteView", function(){
  it("can return html for 1 note",function() {
      note = new Note('I am a note')
      singleNoteView = new SingleNoteView(note)
      html1 = "<div>I am a note</div>"
      assert.isEqual(singleNoteView.getHTML(), html1)
  });
});