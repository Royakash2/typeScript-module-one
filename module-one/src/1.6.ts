// learning function in typescript
// normal function 
// arrow function 

function add(num1:number,num2:number): number{
    return num1+num2
}
add(1,56)

const arrowArray = (num1: number , num2:number): number => num1+num2;

const  obj = {
    name: 'k',
    balance: 0,
    addBalance(balance: number): string{
        return `this is balance ${this.balance + balance}`;
    }
}