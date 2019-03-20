
describe('NoteController', function(){
    it('is a thing', function() {
        list = new NoteList()
        controller = new NoteController(list)
    })
    it('renders a list', function(){
        list = new NoteList()
        controller = new NoteController(list)
        controller.render()
        html = "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
        assert.isEqual(document.getElementById("app").innerHTML, html)
    })
})