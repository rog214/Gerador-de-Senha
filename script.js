let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let resetButton = document.querySelector("#reset");
let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");


sizePassword.innerHTML = sliderElement.value;
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let specialChars = "!@#$&";
    let pass = "";
    
    pass += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
    pass += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
    pass += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    pass += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    let remainingLength = sliderElement.value - 4;
    let charset = upperCaseChars + lowerCaseChars + numberChars + specialChars;
    for (let i = 0; i < remainingLength; i++) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    pass = pass.split('').sort(() => Math.random() - 0.5).join('');


    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword (){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}

resetButton.addEventListener("click", function() {
   
    containerPassword.classList.add("hide");
    password.innerHTML = "";
});

