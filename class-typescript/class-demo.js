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
var usere = new Userb("Iftakhar", 22);
usere.display();
var userb = new Userb("Meem", 25);
userb.display();
// class object
