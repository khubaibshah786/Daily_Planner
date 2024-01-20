
var currentDate = dayjs().format('dddd, d,  MMMM YYYY')

$("#currentDay").text(currentDate);

dayjs().second(30).valueOf() // => new Date().setSeconds(30)
dayjs().second() // => new Date().getSeconds()