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
    it("a note id is added when adding to the list", function(){
      list = new NoteList;
      note = new Note('This is a note')
      list.addNote(note)
      assert.isEqual(list.notes[0].id, 0)
    })
    it("The note id is incremented as each note is added to the list", function(){
      list = new NoteList;
      note = new Note('This is a note')
      note2 = new Note('This is another note')
      list.addNote(note)
      list.addNote(note2)
      assert.isEqual(list.notes[1].id, 1)
    })
});
