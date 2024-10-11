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

    class student extends Userb{
    studentId:number;
    constructor(userName:string,age:number,studentId:number){
        super(userName,age);
        this.studentId=studentId;
    }
    display(): void {
        console.log(`username ;${this.userName} ,age ${this.age},id :${this.studentId}`);
        
    }
    
    let usere=new Userb("Iftakhar",22);
    usere.display()
    let student1= new student("anisul",22,1);
    student1.display()
    
    
    
    // let userb=new Userb("Meem",25);
    // userb.display()
    // // class object