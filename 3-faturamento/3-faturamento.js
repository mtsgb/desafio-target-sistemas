const fs = require('fs');

// Função para ler o arquivo JSON
function lerDadosJson(caminho) {
    const rawData = fs.readFileSync(caminho, 'utf8');
    return JSON.parse(rawData);
}

// Lê os dados do arquivo JSON
const dadosJson = lerDadosJson('./3-faturamento/dados.json');

// Extrai os valores de faturamento diário
const faturamentoDiario = dadosJson.map(item => item.valor);

function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(val => val > 0);

    const menorFaturamento = Math.min(...diasComFaturamento);
    const maiorFaturamento = Math.max(...diasComFaturamento);
    const mediaFaturamento = diasComFaturamento.reduce((acc, val) => acc + val, 0) / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(val => val > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoDiario);

console.log(`Menor valor de faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior valor de faturamento: ${resultado.maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);