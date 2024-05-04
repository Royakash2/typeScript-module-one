{
    // Function with Generic 
    const CrateArray = (param: string): string[] => {
        return [param]
    }
    const CrateArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const CrateArrayWithGenericTuple = <T, X>(param1: T, param2: X): [T, X] => {
        return [param1, param2]
    }
    const res1 = CrateArray('Bangladesh')
    const res11 = CrateArrayWithGenericTuple<string, number>('Bangladesh', 13);
    const resGeneric = CrateArrayWithGenericTuple<string, { name: string }>('Bangladesh', { name: 'akash' });
    type user1 = {
        name: string;
        id: number;
    }
    const resGenericObj = CrateArrayWithGeneric<user1>({
        name: 'Akash Roy',
        id: 12
    })


    const AddCourseToStudent = <T>(student: T) => {
        const course = ' next level web development';
        return {
            ...student,
            course
        }

    }
    const student = AddCourseToStudent({ name: "mr.X", email: 'x@gmail.com', devType: 'nlwd' })
    const student2 = AddCourseToStudent({ name: "mr.y", email: 'y@gmail.com', watch: 'apple' })

    // 
}