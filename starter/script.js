// Date and time with Luxon
var DateTime = luxon.DateTime;
var now = DateTime.now;

// Add to the header the date element, show the present date+time
var date = document.getElementById("date");
date.textContent = now.toLocaleString(DateTime.DATETIME_MED); 

