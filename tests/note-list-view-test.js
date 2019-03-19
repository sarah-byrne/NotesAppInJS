describe('noteListView', function() {
  it('returns nothing when note list is empty', function() {
     notelist = new NoteList() 
     notelistview =  new NoteListView(notelist)
     assert.isEqual(notelistview.getHTML(), "")
  });

});