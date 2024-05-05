{

//  utility Types

// pick Utility type
type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;

}

type NumberEmail = Pick<Person,"contactNo" | "email">

//  Omit type

type ContactInfo = Omit<Person, "name" | "email">


// required utility type

type PersonRequired = Required<Person>

// partial utility type
type personPartial = Partial<Person>

// read Only 
type PersonReadOnly = Readonly<Person>

const person1 : PersonReadOnly = {
    name: " Mr.x",
    age: 200,
    contactNo: 2300
}

// person1.age = 40;


// Record Utility Types
type myObj = Record<string,unknown>

const obj1 : myObj = {
    a:"ak",
    b: "nk",
    c:"lm10",
    d:20
}






// 
}