// Display the current day at the top of the calendar when a user opens the planner.✅

var today = dayjs();
$("#currentDay").text(today.format("dddd, D MMMM YYYY"));

// Present timeblocks for standard business hours when the user scrolls down. ✅
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.✅

var timeblockContainer = $("#timeblock");

for (let i = 9; i < 18; i++) {
    var form = $("<form>");
    var hour = $("<div>").addClass("hour col-1 text-center").text(dayjs().hour(i).format("hA"));
    var eventTextArea = $("<textarea>").addClass("event col-10").attr("id", "event-" + i);
    var saveButton = $("<button>").addClass("saveBtn col-1").text("Save");
    

    form.append(hour, eventTextArea, saveButton);
    timeblockContainer.append(form);

    var currentTime = dayjs().hour();
    
    if (i === currentTime) {
        form.addClass("present");
    } else if (i < currentTime) {
        form.addClass("past");
    } else {
        form.addClass("future");
    }


    // Save the event in local storage when the save button is clicked in that timeblock.✅

// Persist events between refreshes of a page.


$(".saveBtn").on("click", function(event) {
    event.preventDefault();
        
    var index = $(event.target).closest("form").index(); // Get the index of the form
    var userEvent = $(event.target).siblings(".event").val();
    console.log(userEvent);
        
    localStorage.setItem("event-" + index, userEvent); // Use a unique key for each textarea
    });
    renderEvent();
    }
    
    function renderEvent() {
        // var userEvent = localStorage.getItem("event-");
        // return;
        // console.log(renderEvent);
        // console.log(userEvent);
        $("#event-9").text(localStorage.getItem("event-3"));
    $("#event-10").text(localStorage.getItem("event-4"));
    $("#event-11").text(localStorage.getItem("event-11"));
    $("#event-12").text(localStorage.getItem("event-12"));
    $("#event-13").text(localStorage.getItem("event-13"));
    $("#event-14").text(localStorage.getItem("event-14"));
    $("#event-15").text(localStorage.getItem("event-15"));
    $("#event-16").text(localStorage.getItem("event-16"));
    $("#event-17").text(localStorage.getItem("event-17"));

    }

// Persist events between refreshes of a page.



