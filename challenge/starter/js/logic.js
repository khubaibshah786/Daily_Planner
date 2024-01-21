
var currentDate = dayjs().format('dddd DD, MMMM YYYY');
$("#currentDay").text(currentDate);


function setBlockTime() {
    var currentTime = 12; // to test for textarea colour classes
    // var currentTime = dayjs().hour();

    var startTime = dayjs().startOf('day').add(9, 'hour'); // Start from 9 AM
    var endTime = dayjs().startOf('day').add(18, 'hour'); // End at 5 PM
    var appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    //for loop to create each timeblock based on time I have set from 9-5
    for (var hour = startTime; hour.isBefore(endTime); hour = hour.add(1, 'hour')) {
        (function (currentHour) {
            var timeBlock = $('<div>').addClass('row time-block');
            // set the time format to hours
            var hourSection = $('<div>').addClass('col-1 hour').text(currentHour.format('h A'));
            var textarea = $('<textarea>').addClass('col-9 description');

            // Check if the current hour is in the past, present, or future
            if (currentHour.hour() < currentTime) {
                textarea.addClass('past').val('Past Event');
                
            } else if (currentHour.hour() === currentTime) {
                textarea.addClass('present').val('Current Event');
            } else {
                textarea.addClass('future').val('Future Event');
            }

            // Set the stored text for the corresponding hour, if available
            for (var i = 0; i < appointments.length; i++) {
                var appointment = appointments[i];
                if (appointment.Hour === hour.format('h A')) {
                    textarea.val(appointment["user text"]);
                    break; // Stop the loop once a match is found
                }
            }

            var saveBtn = $('<button>').addClass('col-1 saveBtn').append($('<i>').addClass('fas fa-save hover'));

            saveBtn.on('click', function () {
                var savedText = textarea.val();
                var localStorageApp = { "user text": savedText, "Hour": currentHour.format('h A') }
                appointments.push(localStorageApp);

                // Update localStorage with the entire array of appointments
                localStorage.setItem("appointments", JSON.stringify(appointments));
                $('.message').css('text-align', 'center').text('Appointment added to Localstorage')
                console.log('Saved Text:', savedText, 'Hour:', currentHour.format('h A'));
            });

            timeBlock.append(hourSection, textarea, saveBtn);
            $('.container').append(timeBlock);
        })(hour);
    }
}

setBlockTime();
