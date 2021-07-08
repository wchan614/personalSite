


function CalculateTime() {
    let today = new Date();
    let ms = today.getMilliseconds();
    let s = today.getSeconds();
    let m = today.getMinutes();
    let h = today.getHours();
    
    ms = ms < 10 ? "00"+ms : ms < 100 ? "0"+ms : ms;
    s = s < 10 ? "0"+s : s;
    m = m < 10 ? "0"+m : m;
    h = h < 10 ? "0"+h : h;

    let time = h+":"+m+":"+s+":"+ms;
    postMessage(time);
    setTimeout("CalculateTime()",3);
}


CalculateTime();