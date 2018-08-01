import {Person} from './classes';
import * as _ from 'lodash';

let a_person = new Person("Didi", "Yufen", 25);
console.log('First Name: ' + a_person.get_first_name());

var array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));
