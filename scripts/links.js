const baseURL = "https://Aiden-Patterson.github.io/wdd230/"
const linksURL = "https://aiden-patterson.github.io/wdd230/links.json";
const unorderedList = document.querySelector('assignments');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks){
    weeks.forEach((lesson) => {
        const weekNumber = lesson.lesson;
        lesson.forEach((assignment) => {
            const url = assignment.url;
            const title = assignment.title;
            const link = createElement('a');
            link.textContent = title;
            link.setAttribute('href', url);
            const list = createElement('li');
            list.appendChild(link);
            unorderedList.appendChild(list);
        });
    });
}


