const date = new Date();


document.getElementById("copywrite").innerHTML = "&copy " + date.getFullYear();


document.getElementById("lastModified").textContent = "Last Modified: " + date;
