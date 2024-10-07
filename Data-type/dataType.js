// built in data type :number ,string,boolean,void,undefined,null 
// void jodi kono ekta function tekhe kono kisu jodi return na kori tahole take void data type bole 
var userId;
var firstName;
var lastName;
var isActivated;
var fullName;
userId = 101;
firstName = "iftakhar";
lastName = " shuvo";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your id:".concat(userId, " your name : ").concat(fullName, " and your account ").concat(isActivated));
console.log(fullName.split(""));
console.log(fullName.toUpperCase());
function display() {
    console.log("hi i am display");
}
display();
