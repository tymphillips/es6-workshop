import _ from 'lodash';

let count = 0;

let Notes = () => {
	const notes = ['Note 1', 'Note 2', 'Note 3'];
	
	let getAll = () => {
		return notes;	
	};
	
	let getById = (id) => {
		return  _.find(notes, {id});
	};
	
	let createNote = (content) => {
		let note = {content, id: ++count};
		notes.push(note);
	};
	
	return {
		getAll,
		getById,
		createNote
	};
};

export {Notes};