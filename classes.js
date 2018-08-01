"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    Person.prototype.get_first_name = function () {
        return this.first_name;
    };
    Person.prototype.set_first_name = function (first_name) {
        this.first_name = first_name;
    };
    Person.prototype.get_last_name = function () {
        return this.last_name;
    };
    Person.prototype.set_last_name = function (last_name) {
        this.last_name = last_name;
    };
    Person.prototype.get_full_name = function () {
        return this.first_name + " " + this.last_name;
    };
    Person.prototype.greet = function () {
        console.log("Hey there!");
    };
    return Person;
}());
exports.Person = Person;
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello world!");
    };
    Programmer.prototype.greet_like_normal_people = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
// var programmer = new Programmer("Didi", "Yufen", 25);
// programmer.greet()
// programmer.greet_like_normal_people()
// var person = new Person("Didi", "Yufen", 25);
// console.log(person.get_full_name());
