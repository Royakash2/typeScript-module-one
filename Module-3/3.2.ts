{
// oop---> inheritance

class Person{
    name: string;
    age: number;
    address: string;


    constructor(name: string,age:number,address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfHours : number){
        console.log(`${this.name} will sleep ${numberOfHours}`);
    }
}



class Student extends Person {
    


    constructor(name: string,age:number,address: string){
        super(name,age,address);
    }

   

}
const student1 = new Student("Mr. student",20,"uganda")
student1.getSleep(8);



class Teacher extends Person {
    
    // designation: string;


    constructor(name: string,age:number,address: string,public designation: string){
        super(name,age,address)
        // this.designation = designation;
    }

    
    takeClass(numberOfClass: number){
        console.log(`${this.name} will sleep ${numberOfClass}`);
    }

}
const teacher1 = new Teacher("Mr. teacher",40,"BAngladesh","teacher");
teacher1.address;




// 


}