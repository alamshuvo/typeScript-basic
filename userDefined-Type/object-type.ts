// let user1:{userName:string,userId:Number}
let users:object[]
let user1:{userName:string,userId:number}
let user2:{userName:string,userId:number}
user1={userName:"a",userId:11}
user2={userName:"dfdfd",userId:12}
users=[]
users.push(user1,user2)
console.log(users);
for (const key in users) {
   console.log(users[key]["userName"]);
   
}