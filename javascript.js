// Computador de Bordo
function calcularCombustivel() {
    let dinheiro = parseFloat(document.getElementById('dinheiro').value);
    const precoLitro = 7.00;
    const distanciaPorLitro = 20;

    let litros = dinheiro / precoLitro;
    let distancia = litros * distanciaPorLitro;

    document.getElementById('resultadoCombustivel').innerText = `Você pode comprar ${litros.toFixed(2)} litros e o carro pode percorrer ${distancia.toFixed(2)} km.`;
}

// Calculadora de IMC
function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = peso / (altura * altura);
    let categoria;

    if (imc < 18.5) categoria = "abaixo do peso";
    else if (imc < 24.9) categoria = "com peso normal";
    else if (imc < 29.9) categoria = "levemente acima do peso";
    else if (imc < 34.9) categoria = "Obesidade grau I";
    else if (imc < 39.9) categoria = "Obesidade grau II (severa)";
    else categoria = "Obesidade grau III (mórbida)";

    document.getElementById('resultadoIMC').innerText = `Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}`;
}

// Simulador de Lançamento de Dados
function simularLancamentos() {
    let frequencias = [0, 0, 0, 0, 0, 0];
    const numLances = 1000000;

    for (let i = 0; i < numLances; i++) {
        let face = Math.floor(Math.random() * 6);
        frequencias[face]++;
    }

    let resultado = "";
    for (let i = 0; i < 6; i++) {
        let frequencia = (frequencias[i] / numLances) * 100;
        resultado += `Face ${i + 1}: ${frequencias[i]} ocorrências, Frequência: ${frequencia.toFixed(2)}%\n`;
    }

    document.getElementById('resultadoSimulacao').innerText = resultado;
}

// Inversor de Nomes
let nomes = [];
function adicionarNome() {
    let nome = document.getElementById('nome').value;
    nomes.push(nome);
    document.getElementById('listaNomes').innerHTML = nomes.map(nome => `<li>${nome}</li>`).join('');
}

function inverterNomes() {
    let nomesInvertidos = nomes.map(nome => nome.split("").reverse().join(""));
    document.getElementById('listaNomesInvertidos').innerHTML = nomesInvertidos.map(nome => `<li>${nome}</li>`).join('');
}

// Palíndromo
function verificarPalindromo() {
    let palavra = document.getElementById('palavra').value;
    let palavraInvertida = palavra.split("").reverse().join("");

    if (palavra === palavraInvertida) {
        document.getElementById('resultadoPalindromo').innerText = "A palavra é um palíndromo.";
    } else {
        document.getElementById('resultadoPalindromo').innerText = "A palavra não é um palíndromo.";
    }
}
