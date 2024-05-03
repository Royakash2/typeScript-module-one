{
    // Generic type
    // generic type use for dynamic reuseable type korte partesi
    type GenericArray<T> = Array<T>;

    const users : GenericArray<string> = ['frft'];

    const user: GenericArray<object> = [
        {
            name: 'akash',
            age: 2
        },
        {
            name: 'akash',
            age: 'ajhs'
        },
    ]

    // generic tuple
    type genericTuple<x,y> = [x,y];
    interface users {
        name:string,
        age: number
    }

    const userWithId: genericTuple<number,users> =[232,{name:'akash',age: 2}];
    const userWithId2: genericTuple<string,users> =["232",{name:'akash',age: 2}];


 





    // 
}