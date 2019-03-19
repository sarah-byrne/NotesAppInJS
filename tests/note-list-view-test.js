describe('noteListView', function() {
  it('returns nothing when note list is empty', function() {
     notelist = new NoteList() 
     notelistview =  new NoteListView(notelist)
     assert.isEqual(notelistview.getHTML(), "")
  });

  it('returns an html list with 1 list item when the NoteList has one Note', function() {
    notelist = new NoteList()
    note1 = new Note("my first note")
    notelist.addNote(note1)
    view = new NoteListView(notelist)
    html1 = "<ul><li><div>my first note</div></li></ul>"
    assert.isEqual(view.getHTML(), html1)
  })

  it('returns an html list with multiple list items when the NoteList has more than one Note', function() {
    notelist = new NoteList()
    note1 = new Note("my first note")
    note2 = new Note("my second note")
    notelist.addNote(note1)
    notelist.addNote(note2)
    view = new NoteListView(notelist)
    html1 = "<ul><li><div>my first note</div></li><li><div>my second note</div></li></ul>"
    assert.isEqual(view.getHTML(), html1)
  })

});