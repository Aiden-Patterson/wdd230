const orders = document.getElementById("totalDrinks");
const orderbutton = document.getElementById("orderDrinks");
let ordercount = JSON.parse(localStorage.getItem("ordercount")) || 0;


orders.textContent = "Total orders: " + ordercount;


orderbutton.addEventListener("click", ()=> {
    ordercount++;
    localStorage.setItem("ordercount", JSON.stringify(ordercount));

});