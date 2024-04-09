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