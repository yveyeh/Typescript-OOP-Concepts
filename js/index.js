"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var _ = __importStar(require("lodash"));
var a_person = new classes_1.Person("Didi", "Yufen", 25);
console.log('First Name: ' + a_person.get_first_name());
var array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));
