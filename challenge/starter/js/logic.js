
var currentDate = dayjs().format('dddd DD, MMMM YYYY');
$("#currentDay").text(currentDate);



// var textarea = $("<div>");
// textarea.addClass("textarea")
// textarea.text('hellooo')

// var description = $("div")
// description.addClass("description")
// description.text("heloooooooooooooooo")

// $(".container").append(textarea)
    // Create a time block
    function createHourBlock(hour) {
        var timeBlock = $('<div>').addClass('row time-block');
    
        // Create the time/hour section
        var hourSection = $('<div>').addClass('col-1 hour').text(hour.format('H A'));
        timeBlock.append(hourSection);
    
        // Create the textarea
        var textarea = $('<textarea>').addClass('col-9 description present');
        timeBlock.append(textarea);
    
        // Create the save button
        var saveBtn = $('<button>').addClass('col-1 btn saveBtn');
        saveBtn.append($('<i>').addClass('fas fa-save'));
        timeBlock.append(saveBtn);
    
        // Append the time block to the container
        $('.container').append(timeBlock);
    }
    
    function setBlockTime(){

        var startTime = dayjs().startOf('day').add(9, 'hour'); // Start from 9 AM
        var endTime = dayjs().startOf('day').add(18, 'hour'); // End at 5 PM
    
        for (var hour = startTime; hour.isBefore(endTime); hour = hour.add(1, 'hour')) {
            createHourBlock(hour);
        }

    }
    setBlockTime()
    