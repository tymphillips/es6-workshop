import {NoteController as controller} from './note.controller';
import template from './note.html';

let NoteComponent = () => {
	return {
		restrict: 'E',
		controller,
		template
	};
};

export {NoteComponent};