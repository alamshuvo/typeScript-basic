var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Userb = /** @class */ (function () {
    function Userb(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Userb.prototype.display = function () {
        console.log("user name is ".concat(this.userName, " and user age is ").concat(this.age));
    };
    return Userb;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    student.prototype.display = function () {
        console.log("username ;".concat(this.userName, " ,age ").concat(this.age, ",id :").concat(this.studentId));
    };
    return student;
}(Userb));
var usere = new Userb("Iftakhar", 22);
usere.display();
var student1 = new student("anisul", 22, 1);
student1.display();
// let userb=new Userb("Meem",25);
// userb.display()
// // class object
