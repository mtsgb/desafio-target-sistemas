const fs = require('fs');

// Lê o arquivo JSON
const rawData = fs.readFileSync('3-faturamento/faturamento.json', 'utf8');
const { faturamentoDiario } = JSON.parse(rawData);

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