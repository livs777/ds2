function consultaCep(){

    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/17067460/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        alert(JSON.parse(requisicao.response).bairro);
    }

}

let botao = document.querySelector("#botao")
botao.addEventListener("click", consultaCep)