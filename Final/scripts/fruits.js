const option1 = document.getElementById('fruit1');
const option2 = document.getElementById('fruit2');
const option3 = document.getElementById('fruit3');
const url = "https://github.com/Aiden-Patterson/wdd230/Final/data/fruits.json";


async function getFruits(){
    console.log("hello");
    const response = await fetch(url);
    console.log("world");
    const data = await response.json();
    console.log(data.fruits);
    displayFruits(data.fruits);
}
function displayFruits(fruits){
    console.log(url);
    fruits.forEach((fruit) => {
        const option = document.createElement('option');
        option.innerHTML = fruit.name;
        option.setAttribute('value', fruit.name);
        option1.appendChild(option);
        option2.appendChild(option);
        option3.appendChild(option);
    });
}

getFruits();