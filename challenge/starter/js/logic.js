var currentDate = dayjs().format('dddd DD, MMMM YYYY');
$("#currentDay").text(currentDate);

function setBlockTime() {
    var currentTime = 12; // to test for textarea color classes
    // var currentTime = dayjs().hour(); //Test against real time current

    var startTime = dayjs().startOf('day').add(9, 'hour'); // Start from 9 AM
    var endTime = dayjs().startOf('day').add(18, 'hour'); // End at 5 PM
    var appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // for loop to create each time block based on time set from 9-5
    for (var hour = startTime; hour.isBefore(endTime); hour = hour.add(1, 'hour')) {
        var timeBlock = $('<div>').addClass('row time-block');
        // set the time format to hours
        var hourSection = $('<div>').addClass('col-1 hour').text(hour.format('h A'));
        var textarea = $('<textarea>').addClass('col-9 description');

        // Check if the current hour is in the past, present, or future
        if (hour.hour() < currentTime) {
            textarea.addClass('past')
        } else if (hour.hour() === currentTime) {
            textarea.addClass('present')
        } else {
            textarea.addClass('future')
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

        // Event listener for save button
        saveBtn.on('click', function () {
            var savedText = textarea.val();
            
            // Check if an appointment with the same hour already exists
            var existingAppointmentIndex = appointments.findIndex(function (appointment) {
                return appointment.Hour === hour.format('h A');
            });

            if (existingAppointmentIndex !== -1) {
                // Update the existing appointment text
                appointments[existingAppointmentIndex]["user text"] = savedText;
            } else {
                // Create a new appointment
                var localStorageApp = { "user text": savedText, "Hour": hour.format('h A') };
                appointments.push(localStorageApp);
            }

            // Update localStorage with the entire array of appointments
            localStorage.setItem("appointments", JSON.stringify(appointments));
            $('.message').css('text-align', 'center').text('Appointment added to Localstorage');
            console.log('Saved Text:', savedText, 'Hour:', hour.format('h A'));
        });

        timeBlock.append(hourSection, textarea, saveBtn);
        $('.container').append(timeBlock);
    }
}

setBlockTime();
