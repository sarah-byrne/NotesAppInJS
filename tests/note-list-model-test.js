describe("NoteList", function() {
    it("starts off empty", function() {
        list = new NoteList;
        assert.isEmpty(list.notes);
    });
});