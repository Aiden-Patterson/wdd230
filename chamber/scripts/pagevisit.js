const visits = document.getElementById("pageVisits");

let pageVisits = JSON.parse(localStorage.getItem("pageVisits")) || 0;


function pageVisited(){
    pageVisits++;
    localStorage.setItem("pageVisits", JSON.stringify(pageVisits));
    visits.textContent = "Total Visits: " + pageVisits;
}

pageVisited();