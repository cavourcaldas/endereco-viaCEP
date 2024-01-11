let cep = document.getElementById("cep")
let logradouro = document.getElementById("logradouro")
let bairro = document.getElementById("bairro")
let cidade = document.getElementById("cidade")
let uf = document.getElementById("uf")

let json = {
    cep: "64202-205",
    logradouro: "Rua Tabajara",
    complemento: "lado ímpar",
    bairro: "Nossa Senhora de Fátima",
    localidade: "Parnaíba",
    uf: "PI",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107"

}

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

   
