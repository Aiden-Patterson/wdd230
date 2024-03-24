const changebutton = document.getElementById('changebutton');
const main = document.getElementById('members');
const membercard = document.getElementsByClassName("card");

changebutton.addEventListener("click", function(){
    console.log("Hello World");
    main.classList.toggle("listview");

    for(let i = 0; i < membercard.length; i++){
        membercard[i].classList.toggle("cardlistview");
    }
    if(changebutton.textContent.includes('List'))
    {
        changebutton.textContent = 'To Grid';
    }
    else
    {
        changebutton.textContent = 'To List';
    }
});