let botaoAdicionarClique = document.getElementById("botaoCliqueIncremento");
let botaoRemoverClique = document.getElementById("botaoCliqueDecremento")
let contadorVisual = document.getElementById("valorContador");

let contadorCliques = 0;

botaoAdicionarClique.addEventListener("click", function(){
    contadorCliques++;

    contadorVisual.innerText = (`Foram contabilizados ${contadorCliques} cliques.`);
});

botaoRemoverClique.addEventListener("click", function(){
    if(contadorCliques === 0) {
        alert("O contador já está em zero, só é possível incrementar números positivos ao contador.");
        contadorCliques++;
    }
    

    contadorCliques--;
    contadorVisual.innerText = (`Foram contabilizados ${contadorCliques} cliques.`);
});


//Questão 2 - Texto Dinâmico

let txtDinamico = document.getElementById("txtDinamico");
let resultadoTxtDinamico = document.getElementById("resultadoTxtDinamico");

txtDinamico.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        resultadoTxtDinamico.innerText = txtDinamico.value;
    }
});

//Questão 3 - Contador Caracteres

let caracteresDigitados = document.getElementById("caracteresDigitados");

txtDinamico.addEventListener("input", function() {
    let tamanhoTexto = txtDinamico.value;

    let textoFormatado = tamanhoTexto.replace(/ /g, "");

    caracteresDigitados.textContent = textoFormatado.length;
});  

//Questão 4 - Adicionar Elementos Dinâmicos HTML

function elementosDinamicos() {
    let escolha = document.getElementById("elementoHTML").value;
    let texto = document.getElementById("textoElemento").value;
    let novoItem;

    if (escolha === "paragrafo") {
        novoItem = document.createElement("p");
    } else if (escolha === "divisao") {
        novoItem = document.createElement("div");
        novoItem.style.border = "1px solid black"; 
    }


    novoItem.innerText = texto;

    
    document.body.appendChild(novoItem);
}

document.getElementById("textoElemento").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault(); 
        elementosDinamicos();
    }
});
