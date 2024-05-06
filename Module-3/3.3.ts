{

// type guard !

// typeOf ---> type guard
type AlphaNumber = string | number;

const add = (param1: AlphaNumber,param2: AlphaNumber ) : AlphaNumber =>{
    if(typeof param1 === "number" && typeof param2 === "number"){
    return param1+ param2}
    else{
        return param1.toString() + param2.toString();
    }
}

const result = add("43",34);
console.log(result);


// in guard
type normalUser = {
    name: string;
}
type adminUser ={
    name: string;
    role: "Admin";
}
 const getUser = (user: normalUser | adminUser) =>{
    if("role" in user){
        console.log(`hello i am ${user.name} my role is ${user.role}`);
    }
    else{
        console.log(`hello i am ${user.name}`);

    }
 }

 const userOne: normalUser = {
    name: "Normal Bro"
 }
 const userTwo: adminUser = {
    name: "admin bro",
    role: "Admin"
 }
 const Result = getUser(userTwo);
//  console.log(Result);








// 

}