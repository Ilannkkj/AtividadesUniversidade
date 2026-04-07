const precoGasolina = 6.67;
const precoEtanol = 5.67;
const precoDiesel = 6.67;

//função 

const atualizarValor = () => {
    let tipo = document.getElementById("combustivel").value;
    let litros = parseFloat(document.getElementById("litros").value) || 0;

    let precoPorLitro;

    switch (tipo) {
        case "gasolina": 
            precoPorLitro = precoGasolina;
            break;

        case "etanol":
            precoPorLitro = precoEtanol;
            break;

        case "diesel":
            precoPorLitro = precoDiesel;
            break;

        default:
            console.log("Valor Inválido.");
            return;
    };

console.log(tipo);
console.log(precoPorLitro);
calcularAbastecimento(precoPorLitro, litros);

};

let tipo = document.getElementById("combustivel");
tipo.addEventListener("change", atualizarValor);

const calcularAbastecimento = (precoCombustivel, litros) => {
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = valorTotal.toFixed(2);
} 

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

const formulario = document.getElementById("formCombustivel");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    atualizarValor();  
});