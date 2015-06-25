import './noteMaker.css';
import template from './noteMaker.html';
import {NoteMakerController as controller} from './noteMaker.controller';

let NoteMakerComponent = function () {
	return {
		template,
		controller,
		restrict: 'E'
	};
};

export {NoteMakerComponent};