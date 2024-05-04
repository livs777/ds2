function consultaCep(){


    let campo = document.querySelector("#cep");
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/"+ campo.value  +"/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        let objetoCEP = JSON.parse(requisicao.response)
        let campoEnd = document.querySelector("#endereco")
        let campobairro = document.querySelector("#bairro")
        let campoestado = document.querySelector("#estado")
        let campocidade = document.querySelector("#cidade")

        campoEnd.value  = objetoCEP.logradouro
        campobairro.value = objetoCEP.bairro
        campoestado.value = objetoCEP.uf
        campocidade.value = objetoCEP.localidade
    
    }

}

let botao = document.querySelector("#botao")
botao.addEventListener("click", consultaCep)