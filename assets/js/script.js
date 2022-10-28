// setting up vars
var currentDay = $("#currentDay"); 
var saveBtn = $('.saveBtn');
var bntClear = $("#clear")
var currentTime; 

//sets current time/day
function todaysDate(){
    $(currentDay).text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    currentTime = moment().hour('hA'); 
};

//local storgae function
saveBtn.on("click", function() {
    const entry = $(this).siblings(".businessHours").attr("id");
    const retrive = $(this).siblings(".businessHours").val(); 
    localStorage.setItem(entry, retrive);
});

//function to return stored values
function storedEntry() {
    $(".businessHours").each(function() {
        var entry = $(this).attr("id");
        var retrive = localStorage.getItem(entry);
        $(this).val(retrive);
    })
};

// function to change bg based on current time

function tmieCheck() {
    $('.row').each(function() {
        var blockText = $(this).children(".hour").text();
        var timeBlock = moment(blockText, "hA");
        if(timeBlock.isBefore(currentTime)) {
            $(this).children(".businessHours").addClass("past").removeClass("future").removeClass("present");
        } else if(timeBlock.isAfter(currentTime)) {
            $(this).children(".businessHours").addClass("future").removeClass("past").removeClass("present"); 
        } else {
            $(this).children(".businessHours").addClass("present").removeClass("future").removeClass("past");
        }
    })
};

storedEntry();
todaysDate();
tmieCheck();