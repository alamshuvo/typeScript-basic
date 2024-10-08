class Userb{
// properties,method ,constructor
userName:string;
age:number;
constructor(userName:string,age:number){
this.userName=userName;
this.age=age;
}
display():void{
    console.log(`user name is ${this.userName} and user age is ${this.age}`);
    
}

}
let usere=new Userb("Iftakhar",22);
usere.display()
let userb=new Userb("Meem",25);
userb.display()
// class object