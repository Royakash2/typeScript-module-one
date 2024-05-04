{

    // conditional type
    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false; //conditional type


    type sheik = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    type checkVehicle<T> = T extends keyof sheik ? true : false;

    type hasBike = checkVehicle<'plane'>



    // 
}