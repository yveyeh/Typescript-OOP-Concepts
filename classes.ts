export class Person {

    constructor(private first_name: string, private last_name: string, readonly age: number){
        this.first_name = first_name;
        this.last_name = last_name ;
        this.age = age;
    }

    get_first_name(){
        return this.first_name;
    }

    set_first_name(first_name: string) {
        this.first_name = first_name;
    }

    get_last_name(){
        return this.last_name;
    }

    set_last_name(last_name: string) {
        this.last_name = last_name;
    }

    get_full_name(){
        return this.first_name + " " + this.last_name;
    }

    greet(){
        console.log("Hey there!");
    }
}

class Programmer extends Person {

    greet(){
        console.log("Hello world!");
    }

    greet_like_normal_people(){
        super.greet()
    }
}

// var programmer = new Programmer("Didi", "Yufen", 25);
// programmer.greet()
// programmer.greet_like_normal_people()

// var person = new Person("Didi", "Yufen", 25);
// console.log(person.get_full_name());