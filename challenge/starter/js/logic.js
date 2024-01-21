var currentDate = dayjs().format('dddd DD, MMMM YYYY');
$("#currentDay").text(currentDate);


function setBlockTime() {
    var currentTime = 12; // to test for textarea colour classes

    var startTime = dayjs().startOf('day').add(9, 'hour'); // Start from 9 AM
    var endTime = dayjs().startOf('day').add(18, 'hour'); // End at 5 PM

    //for loop to create each timeblock based on time I have set from 9-5
    for (var hour = startTime; hour.isBefore(endTime); hour = hour.add(1, 'hour')) {
        (function (currentHour) {
            var timeBlock = $('<div>').addClass('row time-block');
            // set the time format to hours
            var hourSection = $('<div>').addClass('col-1 hour').text(currentHour.format('h A'));
            var textarea = $('<textarea>').addClass('col-9 description');

            // Check if the current hour is in the past, present, or future
            if (currentHour.hour() < currentTime) {
                textarea.addClass('past');
            } else if (currentHour.hour() === currentTime) {
                textarea.addClass('present');
            } else {
                textarea.addClass('future');
            }

            var saveBtn = $('<button>').addClass('col-1 saveBtn').append($('<i>').addClass('fas fa-save hover'));

            saveBtn.on('click', function () {
                var savedText = textarea.val();
                var localStorageApp = {"user text": savedText, "Hour": currentHour.format('h A')}
                localStorage.setItem("appointment", JSON.stringify(localStorageApp));
            });

            timeBlock.append(hourSection, textarea, saveBtn);
            $('.container').append(timeBlock);
        })(hour);
    }
}

setBlockTime();


