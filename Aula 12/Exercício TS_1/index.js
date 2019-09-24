var PerssonClass = /** @class */ (function () {
    function PerssonClass(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return PerssonClass;
}());
function dateBirth(age) {
    var year = (new Date()).getFullYear();
    return year - age;
}
function returnClick() {
    var nameVar = document.getElementById('name').value;
    var lastNameVar = document.getElementById('lastName').value;
    var ageVar = +(document.getElementById('age').value);
    var personObj = new PerssonClass(nameVar, lastNameVar, ageVar);
    var divResult = document.getElementsByClassName('output');
    divResult[0].innerHTML = JSON.stringify(personObj.firstName + ", " + personObj.lastName + " nascido em " + dateBirth(personObj.age));
}
