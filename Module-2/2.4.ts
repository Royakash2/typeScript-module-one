{
    // Generic type with using interface interface
    interface developer<T,X = null> {
        name: string;
        computer : {
            brand : string ;
            model: string;
            releaseYear : number;
        }
        smartWatch: T;
        bike?: X;
    }
    type smartWatch1 = {
        brand:string;
        model: string,
        display: string
    }

    const poorDeveloper : developer<smartWatch1> ={
        name: 'Akash',
        computer: {
            brand : "apple",
            model: "3.5gm",
            releaseYear : 2013
        },
        smartWatch: {
            brand: "samsung",
            model:"kqz",
            display : "emulate"
        }
    }
    type smartWatch2 = {
        brand:string;
        model: string,
       display: string;
       HeartCont : boolean;
       sleepTrack : undefined;

    }

    const richDeveloper : developer<smartWatch2> ={
        name: 'Abdul',
        computer: {
            brand : "Hp",
            model: "3.5gm",
            releaseYear : 2015
        },
        smartWatch: {
            brand: "asus",
            model:"Qkz",
            display : "metal",
            HeartCont: true,
            sleepTrack : undefined,
        }
    }








    // 

}