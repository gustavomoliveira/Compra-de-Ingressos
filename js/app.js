
function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeIngresso = parseInt(document.getElementById("qtd").value);

    if(quantidadeIngresso <= 0 || isNaN(quantidadeIngresso)) {
        alert("Valor inválido. Por favor reinsira a quantidade desejada.");
        return;
    }

    if(!tipoIngresso || tipoIngresso.trim() === " ") {
        alert("Ingresso inválido. Selecione qual tipo de ingresso você deseja");
        return;
    }

    if(tipoIngresso == "pista") {
        comprarPista(quantidadeIngresso);
    } else if(tipoIngresso == "superior") {
        comprarSuperior(quantidadeIngresso);
    } else {
        comprarInferior(quantidadeIngresso);
    }
}


function comprarPista(quantidadeIngresso) {
    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);

    if(quantidadeIngresso > quantidadePista) {
        alert("Quantidade de ingresso tipo Pista indisponível");
    } else {
        quantidadePista = quantidadePista - quantidadeIngresso;
        document.getElementById("qtd-pista").textContent = quantidadePista;
        alert("Ingresso adquirido com sucesso!");
    }
}

function comprarSuperior(quantidadeIngresso) {
    let quantidadeSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if(quantidadeIngresso > quantidadeSuperior) {
        alert("Quantidade de ingresso tipo Cadeira Superior indisponível");
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidadeIngresso;
        document.getElementById("qtd-superior").textContent = quantidadeSuperior;
        alert("Ingresso adquirido com sucesso!");
    }
}

function comprarInferior(quantidadeIngresso) {
    let quantidadeInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if(quantidadeIngresso > quantidadeInferior) {
        alert("Quantidade de ingresso tipo Cadeira Inferior indisponível");
    } else {
        quantidadeInferior = quantidadeInferior - quantidadeIngresso;
        document.getElementById("qtd-inferior").textContent = quantidadeInferior;
        alert("Ingresso adquirido com sucesso!");
    }
}

