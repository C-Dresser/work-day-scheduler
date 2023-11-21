// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Houeskeeping
var currentTime = dayjs().hour();
var currentDate = dayjs().format('dddd, MMMM DD');
var todaysDateDisplay = document.getElementById("currentDay");
var timeBlocks = document.getElementsByClassName('time-block');
var saveButton = document.getElementsByClassName('btn');
//added current date to header
todaysDateDisplay.textContent = currentDate;

$(function () {
//wrote a function to cycle through the timeblocks on the page and determine their relation to the current time and console log it
//updated function to add data to class lists to display proper css styling based on time of day
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];

    var timeSlot = parseInt(timeBlock.id, 10);

    if (timeSlot < currentTime) {
      timeBlock.classList.add('past');
    } else if (timeSlot === currentTime) {
      timeBlock.classList.add('present');
    } else {
      timeBlock.classList.add('future');
    }
  };
  //added event listener to save buttons
  //updated event listener to retrieve which time block its tied to
  $(saveButton).on("click", function() {
    var blockTime = $(this).closest('.time-block');
    var blockTimeID = blockTime.attr('id');
    console.log(blockTimeID);
  });

  // DO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});