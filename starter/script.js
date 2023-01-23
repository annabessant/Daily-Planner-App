// Date and time with Luxon
var DateTime = luxon.DateTime;
var now = DateTime.now;

// Add to the header the date element, show the present date+time
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