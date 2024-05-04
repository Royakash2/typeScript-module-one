{

// Generic constraint with keyOf operator
type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}
type owner = "bike" | "car" | "ship";

type owner2 = keyof Vehicle;

const person1 : owner2 = 'bike';


const getPropertyValue =<X,Y extends keyof X>(obj: X, key: Y)=>{
    return obj[key];
}

const user ={
    name: 'mr.persian',
    age: 26,
    bike: "yamaha"


}
const result1 = getPropertyValue(user,'bike');



// 


}