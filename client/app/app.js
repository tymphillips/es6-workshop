import 'normalize.css';
import angular from 'angular';
import {homeModule} from './componets/componets';
import {noteMakerModule} from './componets/componets';

angular.module('app', [
	homeModule.name,
	noteMakerModule.name
]);