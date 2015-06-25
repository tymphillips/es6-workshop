class NoteListController {
	constructor(Notes) {
		this.Notes = Notes;

		this.notes = this.getAll();
	}

	addNote(content) {
		this.Notes.createNote(content);
	}

	getById(id) {
		return this.Notes.getById(id);
	}

	getAll() {
		return this.Notes.getAll();
	}
}

NoteListController.$inject = ['Notes'];

export {NoteListController}