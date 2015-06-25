import angualr from 'angular';
import {NoteComponent} from './note.component';

let note = angular.module('note', [])
	.directive('note', NoteComponent);

export {note}