var fromDate, toDate;

$(function () {
    // Initialize always visible datepicker for range selection
    $("#calendarContainer").datepicker({
        numberOfMonths: 1,
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+10',
        minDate: 0,
        showButtonPanel: false, // Removes "Today" button
        onSelect: function (dateText) {
            var selectedDate = $(this).datepicker("getDate");

            // If fromDate is not set or fromDate is after selected date, set it as fromDate
            if (!fromDate || fromDate > selectedDate) {
                fromDate = selectedDate;
                toDate = null;
            } else {
                toDate = selectedDate;
            }

            // Highlight selected range
            if (fromDate && toDate) {
                $("#calendarContainer").datepicker("option", "beforeShowDay", function (date) {
                    return [true, (date >= fromDate && date <= toDate) ? "ui-state-highlight" : ""];
                });
            }

            $("#calendarContainer").datepicker("refresh");

            calculateDaysDifference(); // Update days difference
        }
    });
});

// Calculate and show the total number of days selected
function calculateDaysDifference() {
    if (fromDate && toDate) {
        var timeDifference = toDate - fromDate;
        var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        if (daysDifference >= 0) {
            $("#daysDifference").text("Number of days selected: " + (daysDifference + 1) + " days"); // Add 1 day to account for inclusive booking
        } else {
            $("#daysDifference").text("Please select a valid date range.");
        }
    } else if (fromDate) {
        $("#daysDifference").text("Start date selected. Please select an end date.");
    } else {
        $("#daysDifference").text(""); // Clear the message when no dates are selected
    }
}

// Restore button functionality
$("#restoreButton").on("click", function () {
    fromDate = null;
    toDate = null;
    $("#calendarContainer").datepicker("refresh");
    $("#daysDifference").text(""); // Clear days difference
});

// Handle form submission
$("#bookingForm").on("submit", function (event) {
    event.preventDefault();
    alert("Form Submitted!");
});