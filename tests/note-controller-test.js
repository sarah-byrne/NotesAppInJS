
describe('NoteController', function(){
    it('is a thing', function() {
        list = new NoteList()
        controller = new NoteController(list)
    })
    it('renders a list', function(){
        list = new NoteList()
        controller = new NoteController(list)
        controller.render()
        html = "<ul><li><div><a href=\"#notes/0\">Favourite drink: sel</a></div></li></ul>"
        assert.isEqual(document.getElementById("app").innerHTML, html)
    })
    it('it updates the app div when there is a hashchange', function(){
        list = new NoteList()
        note2 = new Note("my really really long sentence")
        list.addNote(note2)
        controller = new NoteController(list)
        controller.render()
        controller.listen()
        
        window.location.href += "#notes/0"

        singlenoteview = new SingleNoteView(note2)
        html = singlenoteview.getHTML()
        assert.isEqual(document.getElementById("app").innerHTML, html)
    })
})