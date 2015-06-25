import 'normalize.css';
import angular from 'angular';
import {homeModule} from './components/components';
import {noteMakerModule} from './components/components';
import {noteListModule} from './components/components';

angular.module('app', [
	homeModule.name,
	noteMakerModule.name,
	noteListModule.name
]);