let timeblockContainer = document.querySelector('.timeblock-container');
let tasks = ['', '', '', '', '', '', '', '', ''];
const today = moment();

$('#currentDay').text(today.format('dddd, MMMM Do'));



console.log(today.format('MMMM Do YYYY, h:mm:ss a'));
console.log(today.format('dddd, MMMM Do'));
console.log(today.format('h:mm:ss a'));
console.log(today.format('ha'));



tasks = JSON.parse(localStorage.getItem("taskList"));
console.log(tasks);

$('.description').each(function(index) {
    $(this).text(tasks[index]);
})

$('.saveBtn').click(function (e) {
    event.preventDefault();
    let timeBlock = $(this).attr('data-time-block');
    let task = $.trim($(`#${timeBlock}Tasks`).val());
    let index = convertTimeToIndex(timeBlock);
    tasks[index] = task;
    console.log(tasks);

    localStorage.setItem("taskList", JSON.stringify(tasks));
})

function convertTimeToIndex(input) {
    switch (input) {
        case '9am':
            return 0;
        case '10am':
            return 1;
        case '11am':
            return 2;
        case '12pm':
            return 3;
        case '1pm':
            return 4;
        case '2pm':
            return 5;
        case '3pmam':
            return 6;
        case '4pm':
            return 7;
        case '5pm':
            return 8;
        default:
            return 0;
    }
}