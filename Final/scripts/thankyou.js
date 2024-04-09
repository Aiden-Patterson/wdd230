let url = new URL(window.location);
let params  = url.searchParams;

document.querySelector('#name').textContent += params.get("fname");
document.querySelector('#email').textContent += params.get("email");
document.querySelector('#phone').textContent += params.get("phone");
document.querySelector('#fruit1').textContent += params.get("fruit1");
document.querySelector('#fruit2').textContent += params.get("fruit2");
document.querySelector('#fruit3').textContent += params.get("fruit3");
document.querySelector('#special').textContent += params.get("instructions");

const curDate = new Date();
document.querySelector('#date').textContent += curDate.toLocaleString();
const orderTime = new Date(curDate.getTime() + (30*60*1000))
document.querySelector("#pickup").textContent += orderTime.toLocaleTimeString();


const nutrition = "https://aiden-patterson.github.io/wdd230/Final/data/fruits.json";
async function getNutrition(){
    const response = await fetch(nutrition);
    const data = await response.json();
    displayNutrition(data.fruits);
}

function displayNutrition(fruits) {
    let nutrition1;
    let nutrition2;
    let nutrition3;
    for(var i = 0; i < fruits.length; i++) {
        if(fruits[i].name == params.get("fruit1")){
            nutrition1 = fruits[i].nutritions;
        }
        else if(fruits[i].name == params.get("fruit2")) {
            nutrition2 = fruits[i].nutritions;
        }
        else if(fruits[i].name == params.get("fruit3")) {
            nutrition3 = fruits[i].nutritions;
        }
    }
    console.log(nutrition1);
    console.log(nutrition2);
    console.log(nutrition3);
    document.querySelector('#carbs').textContent += (nutrition1.carbohydrates + nutrition2.carbohydrates + nutrition3.carbohydrates).toFixed(2);;
    document.querySelector('#protein').textContent += (nutrition1.protein + nutrition2.protein + nutrition3.protein).toFixed(2);;
    document.querySelector('#fat').textContent += (nutrition1.fat + nutrition2.fat + nutrition3.fat).toFixed(2);
    document.querySelector('#sugar').textContent += (nutrition1.sugar + nutrition2.sugar + nutrition3.sugar).toFixed(2);;
    document.querySelector('#calories').textContent += (nutrition1.calories + nutrition2.calories + nutrition3.calories).toFixed(2);
}

getNutrition();