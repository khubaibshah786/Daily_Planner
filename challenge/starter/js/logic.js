var currentDate = dayjs().format('dddd DD, MMMM YYYY');
$("#currentDay").text(currentDate);

function setBlockTime() {
    var currentTime = 12; // to test for textarea color classes
    // var currentTime = dayjs().hour();

    var startTime = dayjs().startOf('day').add(9, 'hour'); // Start from 9 AM
    var endTime = dayjs().startOf('day').add(18, 'hour'); // End at 5 PM

    // for loop to create each time block based on time set from 9-5
    for (var hour = startTime; hour.isBefore(endTime); hour = hour.add(1, 'hour')) {
        var timeBlock = $('<div>').addClass('row time-block');
        // set the time format to hours
        var hourSection = $('<div>').addClass('col-1 hour').text(hour.format('h A'));
        var textarea = $('<textarea>').addClass('col-9 description');

        // Check if the current hour is in the past, present, or future
        if (hour.hour() < currentTime) {
            textarea.addClass('past');
        } else if (hour.hour() === currentTime) {
            textarea.addClass('present');
        } else {
            textarea.addClass('future');
        }

        var saveBtn = $('<button>').addClass('col-1 saveBtn').append($('<i>').addClass('fas fa-save hover'));

        // Event listener for save button
        saveBtn.on('click', function () {
            var savedText = textarea.val();
            var localStorageApp = { "user text": savedText, "Hour": hour.format('h A') };
            localStorage.setItem("appointment", JSON.stringify(localStorageApp));
            // A success message outside the loop
            var successMessage = $('<div>').addClass('align-item').text('testinggggggggggg');
            $('.container').prepend(successMessage);
        });

        timeBlock.append(hourSection, textarea, saveBtn);
        $('.container').append(timeBlock);
    }

}

setBlockTime();
