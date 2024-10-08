// let user1:{userName:string,userId:Number}
var users;
var user1;
var user2;
user1 = { userName: "a", userId: 11 };
user2 = { userName: "dfdfd", userId: 12 };
users = [];
users.push(user1, user2);
console.log(users);
for (var key in users) {
    console.log(users[key]["userName"]);
}
