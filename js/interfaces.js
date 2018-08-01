"use strict";
var SomeBody = /** @class */ (function () {
    function SomeBody(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    SomeBody.prototype.get_full_name = function () {
        return this.last_name + " " + this.last_name;
    };
    return SomeBody;
}());
var someone = new SomeBody("Didi", "Yufen");
var someObj = {
    first_name: "Test",
    last_name: "Test",
    get_full_name: function () { return "Test"; }
};
someone = someObj;
