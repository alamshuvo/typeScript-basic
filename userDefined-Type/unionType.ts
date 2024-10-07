// user defined data type thats call union type data type 
// Union type 
// kono varibale er jokhn multiple data type nyea kaj korte hobe tokhn union type nyea kaj kora hoi 
let userId:(string|number);
userId=100;
userId="100"
console.log(userId);
function displayUserInfo(userId:string|number) {
    console.log(userId);
    
}
displayUserInfo("101")
displayUserInfo(100)