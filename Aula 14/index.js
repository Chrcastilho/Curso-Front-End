window.addEventListener('load', function () {
    getReminder().then(function (data) { return data.stickyNotes.forEach(function (reminder) {
        var newReminder = new Reminder(reminder.reminder);
        addToOutputReminder(newReminder);
    }); });
});
function getReminder() {
    return fetch('http://localhost:3000/db.json').then(function (res) { return res.json(); });
}
var Reminder = /** @class */ (function () {
    function Reminder(reminder) {
        if (reminder === void 0) { reminder = ''; }
        this.reminder = reminder;
    }
    return Reminder;
}());
function add() {
    var inputReminder = document.getElementById('input-reminder');
    var inputList = [];
    inputList.push(inputReminder);
    if (inputReminder.value) {
        var newReminder = new Reminder(inputReminder.value);
        addToOutputReminder(newReminder);
        clearForm(inputList);
    }
    else {
        alert("Please write a reminder");
    }
}
function clearForm(inputList) {
    inputList.forEach(function (input) {
        input.value = '';
    });
}
function addToOutputReminder(reminder) {
    var outputReminder = document.getElementById('output-reminder');
    var template = "<span class=\"reminder\">\n            <p id=\"reminder-" + reminder.id + "\">Remeber to: " + reminder.reminder + "</p>\n        </span>";
    outputReminder.innerHTML = outputReminder.innerHTML + template;
}
