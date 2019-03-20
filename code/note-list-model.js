(function(exports) {
    function NoteList() {
        this.notes = [];
        this.id = 0
    }
    NoteList.prototype.addNote = function (note) {
      note.id = this.id
      this.id += 1
      this.notes.push(note)
    };
    exports.NoteList = NoteList;
})(this);
