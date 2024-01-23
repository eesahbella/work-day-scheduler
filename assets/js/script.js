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

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
        
    var currentIndex = i; // Get the index of the for loop
    var userEvent = $(event.target).siblings(".event").val();
    // console.log(userEvent);
        
    localStorage.setItem("event-" + currentIndex, userEvent);
    renderEvent();
    });
    
    }
    


    // Persist events between refreshes of a page.
    function renderEvent() {
        for (let i = 9; i < 18; i++) {
            $("#event-" + currentIndex).text(localStorage.getItem("event-" + currentIndex));
        }
        }





