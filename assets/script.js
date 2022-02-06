// get current date

var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(todaysDate);

var currentHour = parseInt(moment().format("HH"));

//add color to past, present, future
$(".description").each(function() {
    var lm = $(this);
    var timeblock = parseInt(lm.attr('id'));

    if  ( timeblock < currentHour) {
        lm.addClass("past");
    }else if (timeblock === currentHour) {
        lm.addClass("present");
    }else {
        lm.addClass("future");
    } 
})

// Save to loacal storage
$(".saveBtn").on("click", function(){
    var input = $(this).siblings(".description").val();
    var time =$(this).siblings(".description").attr("id");
    localStorage.setItem(time, input);
})

// Get items from loacl Storage
$("#9").val(localStorage.getItem(9));
$("#10").val(localStorage.getItem(10));
$("#11").val(localStorage.getItem(11));
$("#12").val(localStorage.getItem(12));
$("#13").val(localStorage.getItem(13));
$("#14").val(localStorage.getItem(14));
$("#15").val(localStorage.getItem(15));
$("#16").val(localStorage.getItem(16));
$("#17").val(localStorage.getItem(17));