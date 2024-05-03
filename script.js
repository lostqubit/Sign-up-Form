const password1 = document.querySelector("#pwd");
const password2 = document.querySelector("#confirm-pwd");
const submitButton = document.querySelector("form");

submitButton.addEventListener("submit",(event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if(data.get("pwd")===data.get("confirm-pwd")){
        submitButton.reset();
    }
    else{
        password2.setCustomValidity("Passwords do not match.")
    }
});

password2.addEventListener("input",(event) =>{
    if(!password2.checkValidity()){
        if(password1.value===password2.value){
            password2.setCustomValidity("");
        }
    }
})