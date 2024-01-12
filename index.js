let cep = document.getElementById("cep")
let logradouro = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let cidade = document.getElementById("cidade")
let uf = document.getElementById("uf")

function obterEndereco () {

    const CEP = cep.value;

    fetch (`https://viacep.com.br/ws/${CEP}/json/`)
    .then(response => response.json())
    .then(json => {
        logradouro.value = json.logradouro;
        bairro.value = json.bairro;
        localidade.value = json.localidade;
        uf.value = json.uf;
    }
    )
}

