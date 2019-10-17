window.addEventListener('load', () =>{
    getReminder().then((data) => data.stickyNotes.forEach((reminder: Reminder) =>{
            let newReminder = new Reminder(reminder.reminder);
            addToOutputReminder(newReminder);
        } 
    ));
})

function getReminder() {
    return fetch('http://localhost:3000/db.json').then(res => res.json());
}

class Reminder implements IReminder {
    id: number;
    reminder: string;

    constructor(reminder: string = '') {
        this.reminder = reminder;
    }
}

function add() {

    const inputReminder = <HTMLInputElement>document.getElementById('input-reminder');

    const inputList: HTMLInputElement[] = [];
    inputList.push(inputReminder);

    if (inputReminder.value) {

        let newReminder = new Reminder(inputReminder.value);

        addToOutputReminder(newReminder);

        clearForm(inputList);

    } else {
        alert(`Please write a reminder`);
    }
}

function clearForm(inputList: HTMLInputElement[]) {
    inputList.forEach((input) => {
        input.value = '';
    });
}

function addToOutputReminder(reminder: Reminder) {
    const outputReminder = document.getElementById('output-reminder');

    let template =
        `<span class="reminder">
            <p id="reminder-${reminder.id}">Remeber to: ${reminder.reminder}</p>
        </span>`;

    outputReminder.innerHTML = outputReminder.innerHTML + template;
}

interface IReminder {
    reminder: string
}