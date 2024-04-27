function consultaCep(){


    let campo = document.querySelector("#cep");
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/"+ campo.value  +"/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        let objetoCEP = JSON.parse(requisicao.response)
        let campoEnd = document.querySelector("#logradouro")
        let campobairro = document.querySelector("#bairro")
        let campouf = document.querySelector("#uf")

        campoEnd.value  = objetoCEP.logradouro
        campobairro.value = objetoCEP.bairro
        campouf.value = objetoCEP.uf
    
    }

}

let botao = document.querySelector("#botao")
botao.addEventListener("click", consultaCep)