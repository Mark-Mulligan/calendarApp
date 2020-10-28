let timeblockContainer = document.querySelector('.timeblock-container');
let tasks = ['', '', '', '', '', '', '', '', ''];
let descriptionClasses = [];
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const today = moment();

tasks = JSON.parse(localStorage.getItem("taskList"));
updateDateAndTime();

$('.description').each(function (index) {
    $(this).text(tasks[index]);
    $(this).addClass(descriptionClasses[index]);
})

$('.saveBtn').click(function (e) {
    event.preventDefault();
    let timeBlock = $(this).attr('data-time-block');
    let task = $.trim($(`#${timeBlock}Tasks`).val());
    let index = convertTimeToIndex(timeBlock);
    tasks[index] = task;
    localStorage.setItem("taskList", JSON.stringify(tasks));
})

function updateDateAndTime() {
    $('#currentDay').text(today.format('dddd, MMMM Do'));
    let currentHour = convertTimeToMilitary(today.format('ha'));

    for (let i = 0; i < hours.length; i++) {
        if (currentHour > hours[i]) {
            descriptionClasses.splice(i, 0, 'past');
        } else if (currentHour === hours[i]) {
            descriptionClasses.splice(i, 0, 'present');
        } else if (currentHour < hours[i]) {
            descriptionClasses.splice(i, 0, 'future');
        }
    }
}

function convertTimeToMilitary(input) {
    switch (input) {
        case '9am': return 9;
        case '10am': return 10;
        case '11am': return 11;
        case '12pm': return 12;
        case '1pm': return 13;
        case '2pm': return 14;
        case '3pm': return 15;
        case '4pm': return 16;
        case '5pm': return 17;
        default: return 0;
    }
}

function convertTimeToIndex(input) {
    switch (input) {
        case '9am': return 0;
        case '10am': return 1;
        case '11am': return 2;
        case '12pm': return 3;
        case '1pm': return 4;
        case '2pm': return 5;
        case '3pmam': return 6;
        case '4pm': return 7;
        case '5pm': return 8;
        default: return 0;
    }
}