const baseURL = "https://Aiden-Patterson.github.io/wdd230/"
const linksURL = "https://aiden-patterson.github.io/wdd230/data/links.json";
const unorderedList = document.getElementById('assignments');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data.lessons);
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((lesson) => {
        //console.log(lesson);
        const weekNumber = lesson.lesson;
        lesson.links.forEach((assignment) => {
        
            const url = assignment.url;
            const title = assignment.title;
            const link = document.createElement('a');
            link.textContent = weekNumber + " : " + title;
            link.setAttribute('href', url);
            const list = document.createElement('li');
            list.appendChild(link);
            //console.log(assignment);
            unorderedList.appendChild(list);
            
        });
    });
}
getLinks();

