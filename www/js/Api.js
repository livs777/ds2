function enviar(){


    const dbParam = JSON.stringify(
        {
            "Nome": document.querySelector("#Nome").value,
            "Documento": document.querySelector("#Documento").value,
            "Celular": document.querySelector("#Celular").value,
            "Cep": document.querySelector("#cep").value,
            "Endereço": document.querySelector("#logradouro").value,
            "Bairro": document.querySelector("#bairro").value,
            "UF": document.querySelector("#uf").value

        }
       
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    }
    xmlhttp.open("POST", "https://etec.fernandograciano.com.br/cadastrocliente.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );

}

