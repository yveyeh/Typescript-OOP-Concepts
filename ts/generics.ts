import {Person} from './classes';


function echo<Type>(arg: Type): Type {
    return arg;
}

var string : string = echo("Hello World! Generic Declaration.");

//

class Admin extends Person {

}

class Manager extends Person {
    
}

let admin: Admin = new Admin("John", "Arthur", 27);
let manager: Manager = new Manager("Eliot", "Alderson", 28);

function personEcho<Type extends Person>(person: Type): Type {
    return person;
}

var person_1 = personEcho(manager);
var person_2 = personEcho(admin);