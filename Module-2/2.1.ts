{
    // 
    // type assertion :-
    // ami jude developer hisebe typeScript theke batter type declare othoba bujte pari etai type assertion
    
    let anything: any ;
    anything = 'next level web development';
    (anything as string)

    const kgToGram = (value: string | number) : string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }
    }

    const result1 = kgToGram(1000) as number;
    const result2 = kgToGram("1000") as string;

    type CustomError = {
        message: string
    }

    try{

    }catch(error){
console.log((error as CustomError).message);
    }
}