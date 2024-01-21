var currentDate = dayjs().format('dddd DD, MMMM YYYY');
$("#currentDay").text(currentDate);


function setBlockTime() {
    var currentTime = dayjs().hour();

    var startTime = dayjs().startOf('day').add(9, 'hour'); // Start from 9 AM
    var endTime = dayjs().startOf('day').add(18, 'hour'); // End at 6 PM

    for (var hour = startTime; hour.isBefore(endTime); hour = hour.add(1, 'hour')) {
        var timeBlock = $('<div>').addClass('row time-block');
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
        timeBlock.append(hourSection, textarea, saveBtn);
        $('.container').append(timeBlock);
    }
}

setBlockTime();

