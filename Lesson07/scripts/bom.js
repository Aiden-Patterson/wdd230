const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

chaptersArray.forEach(chapter => 
{
  displayList(chapter);
});

function getChapterList(){
  return JSON.parse(localStorage.getItem("BOMList"));
}

function displayList(input){
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  li.textContent = input;
  deleteButton.textContent = "❌";
  li.append(deleteButton);
  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
  list.append(li);
}

function setChapterList(){
  localStorage.setItem("BOMList", JSON.stringify(chaptersArray));
}

function deleteChapter(chapter){
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(input => input!== chapter);
  setChapterList();
}