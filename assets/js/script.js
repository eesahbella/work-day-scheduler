// Display the current day at the top of the calendar when a user opens the planner.

var today = dayjs();
$("#currentDay").text(today.format("dddd, D MMMM YYYY"));

// Present timeblocks for standard business hours when the user scrolls down.

var timeblockContainer = $("#timeblock");

for (let i = 9; i < 18; i++) {
    var form = $("<form>");
    var hour = $("<div>").addClass("hour col-1 text-center").text(i + ":00");
    var eventTextArea = $("<textarea>").addClass("event col-10").attr("id", "event-" + i);
    var saveButton = $("<button>").addClass("saveBtn col-1").text("Save");
    
    timeblockContainer.append(hour,eventTextArea,saveButton);
    
}




// Color-code each timeblock based on past, present, and future when the timeblock is viewed.






// Allow a user to enter an event when they click a timeblock.





// Save the event in local storage when the save button is clicked in that timeblock.








// Persist events between refreshes of a page.
