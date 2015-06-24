import 'normalize.css';
import angular from 'angular';
import {homeModule} from './componets/componets';

angular.module('app', [
	homeModule.name
]);