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

// Set up function for the excat / presenttime
// if not is 09:00 >> highlight 09:00 slot
if (currentTimeBlock === 9) {
    textColumn9.classList.remove('second-column');
    textColumn9.classList.remove(second-column-green);
    textColumn9.classList.add(second-column-orange);
}

// if not is 10:00 >> highlight 10:00 slot
if (currentTimeBlock === 10) {
    textColumn10.classList.remove('second-column');
    textColumn10.classList.remove(second-column-green);
    textColumn10.classList.add(second-column-orange);
}

// if not is 11:00 >> highlight 11:00 slot
if (currentTimeBlock === 11) {
    textColumn11.classList.remove('second-column');
    textColumn11.classList.remove(second-column-green);
    textColumn11.classList.add(second-column-orange);
}

// if not is 12:00 >> highlight 12:00 slot
if (currentTimeBlock === 12) {
    textColumn12.classList.remove('second-column');
    textColumn12.classList.remove(second-column-green);
    textColumn12.classList.add(second-column-orange);
}

// if not is 1:00pm >> highlight 1:00pm slot
if (currentTimeBlock === 1) {
    textColumn1.classList.remove('second-column');
    textColumn1.classList.remove(second-column-green);
    textColumn1.classList.add(second-column-orange);
}

// if not is 2:00pm >> highlight 2:00pm slot
if (currentTimeBlock === 2) {
    textColumn2.classList.remove('second-column');
    textColumn2.classList.remove(second-column-green);
    textColumn2.classList.add(second-column-orange);
}

// if not is 3:00pm >> highlight 3:00pm slot
if (currentTimeBlock === 3) {
    textColumn3.classList.remove('second-column');
    textColumn3.classList.remove(second-column-green);
    textColumn3.classList.add(second-column-orange);
}

// if not is 4:00pm >> highlight 4:00 slot
if (currentTimeBlock === 4) {
    textColumn4.classList.remove('second-column');
    textColumn4.classList.remove(second-column-green);
    textColumn4.classList.add(second-column-orange);
}

// if not is 5:00pm >> highlight 5:00pm slot
if (currentTimeBlock === 5) {
    textColumn5.classList.remove('second-column');
    textColumn5.classList.remove(second-column-green);
    textColumn5.classList.add(second-column-orange);
}

// Save the text written in column 2 by clicking on 'Save here' in column 3
function saveBlockText (saveButton) {
    //for 09:00 'Save here' click
    if (saveButton === saveButton9) {
        for (var i = 0; i < savedText.length; i++) {
            if (savedText[i].block === 9) {
                savedText[i].text = textColumn9.textContent;
            }
        }
    }

//for 100:00 'Save here' click
if (saveButton === saveButton10) {
    for (var i = 0; i < savedText.length; i++) {
        if (savedText[i].block === 10) {
            savedText[i].text = textColumn10.textContent;
        }
    }
}

//for 11:00 'Save here' click
if (saveButton === saveButton11) {
    for (var i = 0; i < savedText.length; i++) {
        if (savedText[i].block === 11) {
            savedText[i].text = textColumn11.textContent;
        }
    }
}

//for 12:00 'Save here' click
if (saveButton === saveButton12) {
    for (var i = 0; i < savedText.length; i++) {
        if (savedText[i].block === 12) {
            savedText[i].text = textColumn12.textContent;
        }
    }
}

//for 1:00pm 'Save here' click
if (saveButton === saveButton1) {
    for (var i = 0; i < savedText.length; i++) {
        if (savedText[i].block === 1) {
            savedText[i].text = textColumn1.textContent;
        }
    }
}

//for 2:00pm 'Save here' click
if (saveButton === saveButton2) {
    for (var i = 0; i < savedText.length; i++) {
        if (savedText[i].block === 2) {
            savedText[i].text = textColumn2.textContent;
        }
    }
}


//for 3:00pm 'Save here' click
if (saveButton === saveButton3) {
    for (var i = 0; i < savedText.length; i++) {
        if (savedText[i].block === 3) {
            savedText[i].text = textColumn3.textContent;
        }
    }
}

//for 4:00pm 'Save here' click
if (saveButton === saveButton4) {
    for (var i = 0; i < savedText.length; i++) {
        if (savedText[i].block === 4) {
            savedText[i].text = textColumn4.textContent;
        }
    }
}


//for 5:00pm 'Save here' click
if (saveButton === saveButton5) {
    for (var i = 0; i < savedText.length; i++) {
        if (savedText[i].block === 5) {
            savedText[i].text = textColumn5.textContent;
        }
    }
}

// Create storage for saved content. Show date + time when it was saved
localStorage.setItem("savedText", JSON.stringify(savedText));
saved.textContent = "Last saved: " + date.textContent;
}

// For user to see what was saved in column 2 and when
function load() {
    savedText = JSON.parse(localStorage.getItem("savedText"));
    for (var i = o; (savedText.length) && (i < savedText.length); i++) {
        // when clicking on 09:00 saved content
        if (savedText[i].block===9) {
            textColumn9.textContent = savedText[i].text;
        }

        // when clicking on 10:00 saved content
        if (savedText[i].block===10) {
            textColumn10.textContent = savedText[i].text;
        }

        // when clicking on 11:00 saved content
        if (savedText[i].block===11) {
        textColumn11.textContent = savedText[i].text;
        }

        // when clicking on 12:00 saved content
        if (savedText[i].block===12) {
            textColumn12.textContent = savedText[i].text;
        }

        // when clicking on 1:00pm saved content
        if (savedText[i].block===1) {
            textColumn1.textContent = savedText[i].text;
        }
        // when clicking on 2:00pm saved content
        if (savedText[i].block===2) {
            textColumn2.textContent = savedText[i].text;
        }

        // when clicking on 3:00pm saved content
        if (savedText[i].block===3) {
            textColumn3.textContent = savedText[i].text;
        }
        
        // when clicking on 4:00pm saved content
        if (savedText[i].block===4) {
            textColumn4.textContent = savedText[i].text;
        }

        // when clicking on 5:00pm saved content
        if (savedText[i].block===5) {
            textColumn5.textContent = savedText[i].text;
        }
    }
}