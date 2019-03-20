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
    html1 = "<ul><li><div><a href='#notes/0'>my first note</a></div></li></ul>"
    assert.isEqual(view.getHTML(), html1)
  })

  it('returns an html list with multiple list items when the NoteList has more than one Note', function() {
    notelist = new NoteList()
    note1 = new Note("my first note")
    note2 = new Note("my second note")
    notelist.addNote(note1)
    notelist.addNote(note2)
    view = new NoteListView(notelist)
    html1 = "<ul><li><div><a href='#notes/0'>my first note</a></div></li><li><div><a href='#notes/1'>my second note</a></div></li></ul>"
    assert.isEqual(view.getHTML(), html1)
  })

  it('only includes the first 20 chars of each note in the HTML', function(){
    notelist = new NoteList()
    note1 = new Note("a note that is longer than twenty characters")
    notelist.addNote(note1)
    view = new NoteListView(notelist)
    html1 = "<ul><li><div><a href='#notes/0'>a note that is longe</a></div></li></ul>"
    assert.isEqual(view.getHTML(), html1)
  })

});