function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours >= 12) {
        period = "PM";
        if (hours > 12) hours -= 12;
    }

    if (hours === 0) hours = 12;

    // إضافة صفر قبل الرقم لو أقل من 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;
}

// تحديث كل ثانية
setInterval(updateClock, 1000);

// تشغيلها أول ما الصفحة تفتح
updateClock();




