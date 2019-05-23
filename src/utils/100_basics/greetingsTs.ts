export class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

export function greeterTs(person: Person, age?: number) {
    let res = `TS Hello ${person.firstName} ${person.lastName}`;
    if (age) {
        res += `. You are ${age} y.o.`;
    }
    return res;
}
