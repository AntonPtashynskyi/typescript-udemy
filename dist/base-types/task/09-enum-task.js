"use strict";
var Grades;
(function (Grades) {
    Grades["JUNIOR"] = "junior";
    Grades["MIDDLE"] = "middle";
    Grades["SENIOR"] = "senior";
})(Grades || (Grades = {}));
function upGrade(user) {
    switch (user.level) {
        case Grades.JUNIOR:
            return (user.level = Grades.MIDDLE);
        case Grades.MIDDLE:
            return (user.level = Grades.SENIOR);
        default:
            return "You are on the top Level";
    }
}
