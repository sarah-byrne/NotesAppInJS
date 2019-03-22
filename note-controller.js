(function(exports) {
    function NoteController(noteList) {
        this.noteList = noteList
        note = new Note("Favourite drink: seltzer")
        this.noteList.addNote(note)
        this.view = new NoteListView(this.noteList)
    }
    NoteController.prototype.render = function() {
        document.getElementById("app").innerHTML = this.view.getHTML()
    }
    NoteController.prototype.listen = function() {
        var self = this
        window.addEventListener("hashchange", function() {
            noteId = window.location.hash.split("#notes/")[1]
            console.log("noteId" + noteId)
            console.log("window.location.hash " + window.location.hash)
            singlenoteview = new SingleNoteView(self.noteList.notes[parseInt(noteId)])
            console.log("singlenoteview.getHTML " + singlenoteview.getHTML())
            console.log("app before update" + document.getElementById("app").innerHTML)
            document.getElementById("app").innerHTML = singlenoteview.getHTML()
            console.log("app after update" + document.getElementById("app").innerHTML)
        })
    }
    exports.NoteController = NoteController
})(this)