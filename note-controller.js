(function(exports) {
    function NoteController(noteList) {
        this.noteList = noteList
        note = new Note("Favourite drink: seltzer")
        noteList.addNote(note)
        this.view = new NoteListView(noteList)
    }
    NoteController.prototype.render = function() {
        document.getElementById("app").innerHTML = this.view.getHTML()
    }
    exports.NoteController = NoteController
})(this)