(function(exports) {
    function NoteController(noteList) {
        this.noteList = noteList
        this.note = new Note("Favourite drink: seltzer")
        this.noteList.addNote(this.note)
        this.view = new NoteListView(this.noteList)
    }
    NoteController.prototype.render = function() {
        document.getElementById("app").innerHTML = this.view.getHTML()
    }
    NoteController.prototype.listen = function() {
        window.addEventListener("hashchange", showNoteById(this.noteList))
    }
    // NoteController.prototype.showNoteById = function(){
    //     noteId = window.location.hash.split("#notes/")[1]
    //     console.log(this)
    //     console.log("self" + self)
    //     singlenoteview = new SingleNoteView(this.noteList.notes[parseInt(noteId)])
    //     document.getElementById("app").innerHTML = singlenoteview.getHTML()
    // }
    function showNoteById(list) {
        noteId = window.location.hash.split("#notes/")[1]
        console.log("window.location.hash " + window.location.hash)
        singlenoteview = new SingleNoteView(list.notes[parseInt(noteId)])
        document.getElementById("app").innerHTML = singlenoteview.getHTML()
    }
    exports.NoteController = NoteController
})(this)