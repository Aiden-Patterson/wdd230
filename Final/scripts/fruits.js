const option1 = document.getElementById('fruit1');
const option2 = document.getElementById('fruit2');
const option3 = document.getElementById('fruit3');
const baseURL = "https://aiden-patterson.githup.io/wdd230";
const url = "https://aiden-patterson.github.io/wdd230/Final/data/fruits.json";


async function getFruits(){
    const response = await fetch(url);
    const data = await response.json();
    displayFruits(data.fruits);
}
function displayFruits(fruits){
    console.log(url);
    fruits.forEach((fruit) => {
        const option = document.createElement('option');
        option.innerHTML = fruit.name;
        option.setAttribute('value', fruit.name);
        option1.appendChild(option);
    });
    fruits.forEach((fruit) => {
        const option = document.createElement('option');
        option.innerHTML = fruit.name;
        option.setAttribute('value', fruit.name);
        option2.appendChild(option);
    });
    fruits.forEach((fruit) => {
        const option = document.createElement('option');
        option.innerHTML = fruit.name;
        option.setAttribute('value', fruit.name);
        option3.appendChild(option);
    });
}

getFruits();