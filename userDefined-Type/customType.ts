// let user1:{userName:string,userId:Number}

type User={userName:string,userId:number}
let users:User[]
users=[]
let user1:User;
let user2:User;
let user3:User;
user1={userName:"a",userId:11}
user2={userName:"dfdfd",userId:12}
user3={userName:"user3",userId:22}

// users.push(user1,user2,user3)
// console.log(users);
// for (const key in users) {
//    console.log(users[key]["userName"]);
   
// } 
type RequestTypea="GET" | "POST"
let getRequest:RequestTypea;
getRequest= "GET"


function requestHandaler(requestType:RequestTypea) {
    console.log(requestType);
    
}
requestHandaler("POST")