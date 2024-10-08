// let user1:{userName:string,userId:Number}
var users;
users = [];
var user1;
var user2;
var user3;
user1 = { userName: "a", userId: 11 };
user2 = { userName: "dfdfd", userId: 12 };
user3 = { userName: "user3", userId: 22 };
var getRequest;
getRequest = "GET";
function requestHandaler(requestType) {
    console.log(requestType);
}
requestHandaler("POST");
