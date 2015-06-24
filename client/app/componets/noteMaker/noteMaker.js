import './noteMaker.css';
import angular from 'angular';
import template from './noteMaker.html';
import {NoteMakerController as controller} from './noteMaker.controller';

let noteMakerModule = angular.module('noteMaker', [])
	.directive('noteMaker', function () {
		return {
			template,
			controller,
			restrict: 'E'
		};
	});
	
export { noteMakerModule };