let elementoDeslizante = document.querySelector("#deslizante");
let elementoBotao = document.querySelector("#botao");
let botaoRedefinir = document.querySelector("#botao-redefinir");
let tamanhoSenha = document.querySelector("#valor");
let elementoSenha = document.querySelector("#senha");
let conteinerSenha = document.querySelector("#conteiner-senha");
let senhaGerada = "";

tamanhoSenha.innerHTML = elementoDeslizante.value;
elementoDeslizante.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha() {
    let caracteresMaiusculos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let caracteresMinusculos = "abcdefghijklmnopqrstuvwxyz";
    let caracteresNumericos = "0123456789";
    let caracteresEspeciais = "!@#$&";
    let senha = "";
    
    senha += caracteresMaiusculos.charAt(Math.floor(Math.random() * caracteresMaiusculos.length));
    senha += caracteresMinusculos.charAt(Math.floor(Math.random() * caracteresMinusculos.length));
    senha += caracteresNumericos.charAt(Math.floor(Math.random() * caracteresNumericos.length));
    senha += caracteresEspeciais.charAt(Math.floor(Math.random() * caracteresEspeciais.length));

    let tamanhoRestante = elementoDeslizante.value - 4;
    let todosCaracteres = caracteresMaiusculos + caracteresMinusculos + caracteresNumericos + caracteresEspeciais;
    
    for (let i = 0; i < tamanhoRestante; i++) {
        senha += todosCaracteres.charAt(Math.floor(Math.random() * todosCaracteres.length));
    }

    senha = senha.split('').sort(() => Math.random() - 0.5).join('');

    conteinerSenha.classList.remove("oculto");
    elementoSenha.innerHTML = senha;
    senhaGerada = senha;
}

function copiarSenha() {
    if (!senhaGerada) return;
    
    let areaTexto = document.createElement("textarea");
    areaTexto.value = senhaGerada;
    document.body.appendChild(areaTexto);
    areaTexto.select();
    
    try {
        document.execCommand("copy");
        
        let notificacao = document.createElement('div');
        notificacao.textContent = "Senha copiada com sucesso!";
        notificacao.classList.add('notificacao');
        document.body.appendChild(notificacao);

        setTimeout(() => {
            notificacao.remove();
        }, 3000);
    } catch (erro) {
        console.error('Falha ao copiar: ', erro);
    }
    
    document.body.removeChild(areaTexto);
}

botaoRedefinir.addEventListener("click", function() {
    conteinerSenha.classList.add("oculto");
    elementoSenha.innerHTML = "";
});
