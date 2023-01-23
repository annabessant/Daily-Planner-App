// Date and time with Luxon
var DateTime = luxon.DateTime;
var now = DateTime.now;

// Requirement "Display the current day at the top of the calendar when a user opens the planner"
// Solution: Add to the header the date element, show the present date+time
var date = document.getElementById("date");
date.textContent = now.toLocaleString(DateTime.DATETIME_MED); 

// Add DOM element to 2nd column & 3rd column for Save button
var textColumn9 = document.getElementById("9-second-column");
var saveButton9 = document.getElementById("9-save-button");
var textColumn10 = document.getElementById("10-second-column");
var saveButton10 = document.getElementById("10-save-button");
var textColumn11 = document.getElementById("11-second-column");
var saveButton11 = document.getElementById("11-save-button");
var textColumn12 = document.getElementById("12-second-column");
var saveButton12 = document.getElementById("12-save-button");
var textColumn1 = document.getElementById("1-second-column");
var saveButton1 = document.getElementById("1-save-button");
var textColumn2 = document.getElementById("2-second-column");
var saveButton2 = document.getElementById("2-save-button");
var textColumn3 = document.getElementById("3-second-column");
var saveButton3 = document.getElementById("3-save-button");
var textColumn4 = document.getElementById("4-second-column");
var saveButton4 = document.getElementById("4-save-button");
var textColumn5 = document.getElementById("5-second-column");
var saveButton5 = document.getElementById("5-save-button");
var saved = document.getElementById("saved")

//To save text in 2nd column 
var savedText = [
    {block: 9, text: ''},
    {block: 10, text: ''},
    {block: 11, text: ''},
    {block: 12, text: ''},
    {block: 1, text: ''},
    {block: 2, text: ''},
    {block: 3, text: ''},
    {block: 4, text: ''},
    {block: 5, text: ''},
];

// Requirement: "Color-code each timeblock based on past, present, and future when the timeblock is viewed"
// Solution: Add function to change the colour when it needs to be changed, i.e. ensure time passing condition

function blockColor () {
    var currentTimeBlock = 9;
    // when the time is 10:00 or more => change 09:00 column into orange
    if (now.hour > 9) {
        textColumn9.classList.remove('second-column');
        textColumn9.classList.remove('second-column-orange');
        textColumn9.classList.add('second-column-green');
        currentTimeBlock = 10;
    }

    // when the time is 11:00 or more => change 10:00 column into orange
    if (now.hour > 10) {
            textColumn10.classList.remove('second-column');
            textColumn10.classList.remove('second-column-orange');
            textColumn10.classList.add('second-column-green');
            currentTimeBlock = 11;
    }

    // when the time is 12:00 or more => change 11:00 column into orange
    if (now.hour > 11) {
        textColumn11.classList.remove('second-column');
        textColumn11.classList.remove('second-column-orange');
        textColumn11.classList.add('second-column-green');
        currentTimeBlock = 12;
    }

    // when the time is 1:00pm or more => change 12:00 column into orange
    if (now.hour > 12) {
            textColumn12.classList.remove('second-column');
            textColumn12.classList.remove('second-column-orange');
            textColumn12.classList.add('second-column-green');
            currentTimeBlock = 1;
    }

    // when the time is 2:00pm or more => change 1:00pm column into orange
    if (now.hour > 13) {
        textColumn1.classList.remove('second-column');
        textColumn1.classList.remove('second-column-orange');
        textColumn1.classList.add('second-column-green');
        currentTimeBlock = 2;
    }

    // when the time is 3:00pm or more => change 2:00pm column into orange
    if (now.hour > 14) {
        textColumn2.classList.remove('second-column');
        textColumn2.classList.remove('second-column-orange');
        textColumn2.classList.add('second-column-green');
        currentTimeBlock = 3;
    }

    // when the time is 4:00pm or more => change 3:00pm column into orange
    if (now.hour > 15) {
        textColumn3.classList.remove('second-column');
        textColumn3.classList.remove('second-column-orange');
        textColumn3.classList.add('second-column-green');
        currentTimeBlock = 4;
    }

    // when the time is 5:00pm or more => change 4:00pm column into orange
    if (now.hour > 16) {
        textColumn4.classList.remove('second-column');
        textColumn4.classList.remove('second-column-orange');
        textColumn4.classList.add('second-column-green');
        currentTimeBlock = 5;
    }

    // when the time is 6:00pm or more => change 5:00pm column into orange
    if (now.hour > 17) {
        textColumn5.classList.remove('second-column');
        textColumn5.classList.remove('second-column-orange');
        textColumn5.classList.add('second-column-green');
        currentTimeBlock = 6;
    }
}