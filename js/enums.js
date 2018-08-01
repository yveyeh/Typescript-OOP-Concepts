"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
})(WeekDays || (WeekDays = {}));
var day;
day = WeekDays.Monday;
if (day = WeekDays.Monday) {
    console.log("Prepare to go to work!");
}
