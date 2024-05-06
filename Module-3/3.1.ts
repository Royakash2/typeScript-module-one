{
    // Object Oriented programming: OOP->

    // oop- class
    class animal {
      
        constructor(public name: string,
            public species: string,
            public sound: string,) {
        }
        MakeSound(){
            console.log(`the ${this.name} says ${this.sound}`);
        }
    }

    const cat = new animal("Lukaku","Ghana","Meaaw Maeaw");
    const Dog = new animal("Sane","German","Bark bark");
    Dog.MakeSound()





    // 
}