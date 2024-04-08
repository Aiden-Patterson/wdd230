const option1 = document.getElementById('fruit1');
const option2 = document.getElementById('fruit2');
const option3 = document.getElementById('fruit3');
const url = "data/fruits.js";

function displayFruits(){
    console.log(url);
    url.forEach((fruit) => {
        const option = document.createElement('option');
        option.innerHTML = fruit.name;
        option.setAttribute('value', fruit.name);
        option1.appendChild(option);
        option2.appendChild(option);
        option3.appendChild(option);
    });
}

displayFruits();