let dateVisited = getLastDate() || new Date();
let text = document.getElementById("lastVisit");
function getLastDate() {
  return JSON.parse(localStorage.getItem("visitCount")) || 0;
}

function UpdateLastVisit() {
  dateVisited = new Date();
  localStorage.setItem("visitCount", JSON.stringify(visitCount));
}

function setText() {
    const now = new Date();
    //dateVisited.setDate(now.getDate() -7);
    if(dateVisited == 0)
    {
        text.textContent = "Welcome! Let us know if you have any questions.";
    }

    else if((now.getTime() - dateVisited.getTime()) / (1000*60*60) < 24)
    {
        text.textContent = "Back so soon! Awesome!";
    }
    else{
        let dayDifference = (now.getTime() - dateVisited.getTime())/ (1000*60*60*24);
        text.textContent = "Last visit: " + dayDifference + " ";
        if(dayDifference == 1)
        {
            text.textContent += "day ago.";
        }
        else{
            text.textContent += "days ago.";
        }
    }
}

setText();
UpdateLastVisit();