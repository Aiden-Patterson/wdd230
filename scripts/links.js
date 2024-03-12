const baseURL = "https://Aiden-Patterson.github.io/wdd230/"
const linksURL = "https://aiden-patterson.github.io/wdd230/data/links.json";
const unorderedList = document.querySelector('assignments');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (weeks) => {
    weeks.forEach((lesson) => {
        const weekNumber = lesson.lesson;
        lesson.forEach((assignment) => {
            const url = assignment.url;
            const title = assignment.title;
            const link = document.createElement('a');
            link.textContent = weekNumber + " : " + title;
            link.setAttribute('href', url);
            const list = createElement('li');
            list.appendChild(link);
            unorderedList.appendChild(list);
        });
    });
}
getLinks();

