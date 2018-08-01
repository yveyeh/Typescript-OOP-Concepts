interface Someone {
    
    first_name : string;
    last_name : string;

    get_full_name(): string;
     
}

class SomeBody implements Someone {

    first_name : string;
    last_name : string;

    constructor (first_name : string, last_name : string){
        this.first_name = first_name;
        this.last_name = last_name;
    }

    get_full_name(): string {
        return this.last_name + " " + this.last_name;
    }

}

let someone: Someone  = new SomeBody("Didi", "Yufen");

let someObj = {
    first_name: "Test",
    last_name: "Test",
    get_full_name:() => "Test"
};

someone = someObj;