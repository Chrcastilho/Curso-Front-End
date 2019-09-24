class PerssonClass {
    constructor(public firstName: string, public lastName: string, public age: number) {
            }
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function dateBirth(age: number): number{
    var year =  (new Date()).getFullYear();
    return year - age;
}

function returnClick() {
var nameVar = (<HTMLInputElement>document.getElementById('name')).value;
var lastNameVar = (<HTMLInputElement>document.getElementById('lastName')).value;
var ageVar = +((<HTMLInputElement>document.getElementById('age')).value);

var personObj = new PerssonClass(nameVar,lastNameVar,ageVar);
var divResult = document.getElementsByClassName('output');
divResult[0].innerHTML = JSON.stringify(personObj.firstName + ", " + personObj.lastName + " nascido em " + dateBirth(personObj.age));
}