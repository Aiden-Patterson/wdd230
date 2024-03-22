const date = new Date();

function getDate() {
  const formDate = document.getElementById("date");
  formDate.value = date;
}

getDate();