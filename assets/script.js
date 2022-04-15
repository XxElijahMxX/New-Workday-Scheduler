$(document).ready(function () {
    

// setting the date and time
let date = moment().format("dddd, MMMM Do YYYY");
let currentTime = moment().hour();
$("#currentDay").append(date);

//defines hours in an array for the planner
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// this defines the variable and links it with the class of .saveBtn
const saveTime =document.querySelector(".saveBtn");

// this loops through the hours of the planner getting the date and time and assigning a color value depending on the time
for (var i = 0; i < 9; i++) {
    // condition statement making block of time a specific color if its value is = to present time 
    if (currentTime === hours[i]) {
        document.getElementById(i).classList.add("present");
    }
    // condition statement  making this block of time a specific color if its value is greater than present time
    else if (currentTime < hours[i]) {
        document.getElementById(i).classList.add("future");
    }
    // condition statement making this block of time a specific color if the value is less than the present time
    else if (currentTime > hours[i]) {
        document.getElementById(i).classList.add("past");
    }
}
})

