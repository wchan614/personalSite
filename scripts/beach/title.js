
function UpdateTitle(e) {

    let key;
    if (window.event) {
        key = e.keyCode;
    }
    else if (e.which) {
        key = e.which;
    }

    if (key == 13) {
        e.preventDefault();

        let input = document.getElementById("titleFormTextbox");
        let text = input.value.toUpperCase();
        input.placeholder = "Enter a phrase.";

        if (text.length > 15) {
            input.value = "";
            input.placeholder = "Phrase too long.";
        }
        else {
            document.getElementById("title").innerHTML = text;
            phrase = text;
            input.value = "";
            SaveToCache();
        }
    }
}




function ToggleTitle() {
    showTime = !showTime;
    let title = document.getElementById("title");
    if (showTime === true) {
        title.innerHTML = "";
        title.setAttribute("style","padding-left: 20px; padding-right: 20px;");
        
        StartTimeWorker();
    } 
    else {
        StopTimeWorker();
        title.innerHTML = phrase;
        title.setAttribute("style","padding = 0;");
    }
}


//https://stackoverflow.com/questions/18586921/how-to-launch-html-using-chrome-at-allow-file-access-from-files-mode
let task;
function StartTimeWorker() {

    if (typeof(Worker) !== "undefined") {
        if (typeof(task) == "undefined") {
            task = new Worker("./scripts/beach/calculateTime.js");

        }
        task.onmessage = function(event) {
            document.getElementById("title").innerHTML = event.data;
        };
    } 
    else {
        document.getElementById("title").innerHTML = "N/A";
    }
}

function StopTimeWorker() {
    task.terminate();
    task = undefined;
}


