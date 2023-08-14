"use strict"

const mainFunc = () => {
    const studentName = (text = 'Enter your name') => prompt(text);
    const studentLastname = (text = 'Enter your Surname') => prompt(text);
    const student = {
        name : studentName(),
        lastname : studentLastname(),
        table : {},
        setTable(asd,asds) {
            this.table = {
                predmet : sdfsdf,
                ozenka : 123,
            }
        },
    }
    console.log(student)
}

mainFunc().setTable()