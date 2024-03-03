const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#confpassword');
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", checkSame);

function checkSame(){
    if(pass1.value == pass2.value){
        message.style.visibility = "hidden";
        pass2.style.backgroundColor = "green";
    }
    else{
        message.style.visibility = "visible";
        pass2.style.backgroundColor = "red";
        pass2.value="";
        pass2.focus();
    }
}