describe("NoteList", function() {
    it("starts off empty", function() {
        list = new NoteList;
        assert.isEmpty(list.notes);
    });
    it("Returns a list of notes", function(){
      list = new NoteList;
      note = "note double"
      note2 = "note2 double"
      list.addNote(note)
      assert.contains(list.notes, note)
    })
});
