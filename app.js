function updateTime(){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let date= currentTime.getDate()
    let month= currentTime.getMonth()
    let year= currentTime.getFullYear()
    let day=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Saturday"]
    if (hour<10){
        hour="0"+hour;
    }
    if (minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }
    if (date<10){
        date="0"+date;
    }
    if (month<10){
        month="0"+month;
    }

    document.getElementById("hour").innerHTML = hour +": ";
    document.getElementById("minute").innerHTML = minute +": ";
    document.getElementById("second").innerHTML = second;
    document.getElementById("date").innerHTML = date+" /";
    document.getElementById("month").innerHTML = month+" /";
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = day[currentTime.getDay()-1];

}
setInterval(updateTime);