class Student {
    returnData: string;
    constructor(public firstName: string, public lastName: string, public age: number) {
        this.returnData = firstName + " " + lastName + ", nascido em" + dateBirth(age);
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
var nameVar = document.getElementById('name');
var lastNameVar = document.getElementById('lastName');
//var ageVar = document.getElementById('age');
var ageVar = 1992;

var text = (nameVar+ " " + lastNameVar + ", nascido em" + ageVar);
console.log(text);
var divResult = document.getElementsByClassName('output');
console.log(divResult);
divResult[0].innerHTML = JSON.stringify(text);
}