{

    // interface
    // note: shokol primitive data ar khetre amra type alias use korbo r object ar khetre interface bebohar korbo abr type alias o use korte parbo 
    // 2. type alias a jude amra ekta property barate chai taile amra inter section use korte pari (&), interface ar khetre amra (extends) use korte type barate pari ;

    type userOne = {
        name: string;
        age: number;
    };
    interface user2 {
        name: string;
        age: number;
    }
    type rollUser = userOne & {role: number}; /* type alias intersection (&) use kore property bariyechi*/
    interface rollUser2 extends user2{
        role: number;
    } /* interface a  (extends) use kore property bariyechi*/
    
    // type alias dara array declear 
    type Roll = number[];
    interface Roll2 {
        [index: number] : number;
    }
    const rollNumber : Roll2 = [1,2,3,4,5,6,7]

    // use function with type alias and interface
    type Add = (num1: number,num2: number)=> number;
    interface Add2 {
        (num1: number,num2:number) : number;
    }

    const add: Add2 =(num1,num2) => num1 + num2;


    const user1: rollUser = {
        name: 'Akash',
        age: 20,
        role: 34,
    }
    console.log(user1);
}