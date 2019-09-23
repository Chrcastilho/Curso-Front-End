var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.returnData = firstName + " " + lastName + ", nascido em" + dateBirth(age);
    }
    return Student;
}());
function dateBirth(age) {
    var year = (new Date()).getFullYear();
    return year - age;
}
function returnClick() {
    var nameVar = document.getElementById('name');
    var lastNameVar = document.getElementById('lastName');
    //var ageVar = document.getElementById('age');
    var ageVar = 1992;
    var text = (nameVar + " " + lastNameVar + ", nascido em" + ageVar);
    console.log(text);
    var divResult = document.getElementsByClassName('output');
    console.log(divResult);
    divResult[0].innerHTML = JSON.stringify(text);
}
