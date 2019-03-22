
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

    linkClicked = function() {
        return new Promise ( function(resolve) {
            window.location.href += "#notes/0"
            setTimeout(function() {
                resolve();
            }, 300)
        })
    }

    it('it updates the app div when there is a hashchange', async function(){
        list = new NoteList()
        note2 = new Note("my really really long sentence")
        list.addNote(note2)
        controller = new NoteController(list)
        controller.render()
        controller.listen()
        
        // window.location.href += "#notes/0"
      
        await linkClicked()

        console.log("app after hashchange in test" + document.getElementById("app").innerHTML)

        singlenoteview = new SingleNoteView(note2)
        html = singlenoteview.getHTML()
        console.log("app after before assert in test in test" + document.getElementById("app").innerHTML)
        assert.isEqual(document.getElementById("app").innerHTML, html)
        console.log("app after after assert in test in test" + document.getElementById("app").innerHTML)
    })
})

