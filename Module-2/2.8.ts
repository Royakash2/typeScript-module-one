{
// promise
const getToDo = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    console.log(data);
}
getToDo();

const createPromise = (): Promise<number> => {
    return new Promise<number>((resolve,reject) =>{
        const data : number = 123
        if (data){
            resolve(data)
        } else{
            reject("failed to load data")
        }
    }) 
}

// calling create promise function

const ShowData = async(): Promise<number> => {
    const data : number = await createPromise();
    return data;
    // console.log(data);
}
ShowData();

// 




}