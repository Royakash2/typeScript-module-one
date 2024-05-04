{
    // constraints

    const AddCourseToStudent = <T extends {id: number;name:string; email: string}>(student: T) => {
        const course = ' next level web development';
        return {
            ...student,
            course
        }

    }
    const student3 = AddCourseToStudent({id:12,name: 'akash',email: 'z@gmail.com',emni: 'ok bye'})
    const student = AddCourseToStudent({id:23, name: "mr.X", email: 'x@gmail.com', devType: 'nlwd' })
    const student2 = AddCourseToStudent({id: 34, name: "mr.y", email: 'y@gmail.com', watch: 'apple' })

    // 
}