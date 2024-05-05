{
// mapped type

const arrOfNumbers : number[] = [1,2,34,45];
// const arrOfString : string[] = ['ak','R9','lm10']

const arrOfStrings : string[] = arrOfNumbers.map((number)=>
number.toString()
);
console.log(arrOfStrings);



type Area = {
    height: number;
    width: number;
}

type AreaString<T> = {
    [ key in keyof T] : T[key]
}
const area1 : AreaString<{height: string,width: string}> = {
    height: "100",
    width: 'hello'
}





// 


}