(function(exports) {
  function NoteListView(list) {
   this.list = list
  }
  NoteListView.prototype.getHTML = function() {
   var notes = this.list.notes
   html = ""
   for (i = 0; i < notes.length; i++){
    html += "<li><div>" + notes[i].getText() + "</div></li>"
   }
   if (notes.length > 0) {
       html = "<ul>" + html + "</ul>"
   }
   return html
  }

exports.NoteListView = NoteListView
})(this);