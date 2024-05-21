/*document.addEventListener('DOMContentLoaded', function () {
    var data = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Evapotranspiração (mm)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            pointBorderWidth: 1,
            pointRadius: 3,
            pointHoverRadius: 5,
            data: Array(12).fill(null)
        }]
    };

    var options = {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Evapotranspiração (mm)'
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Mês'
                }
            }]
        }
    };

    var ctx = document.getElementById('EvapoTranspiracao').getContext('2d');

    // Defina a instância do gráfico em um escopo acessível
    window.evapotranspiracaoChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});

window.minimaMediaMaximaTemp = function (temperaturasDeUmMes) {
    let maiorTemperatura = temperaturasDeUmMes[0];
    let menorTemperatura = temperaturasDeUmMes[0];
    let somaTemperatura = 0;

    for (let i = 0; i < temperaturasDeUmMes.length; i++) {
        somaTemperatura += temperaturasDeUmMes[i];

        if (maiorTemperatura < temperaturasDeUmMes[i]) {
            maiorTemperatura = temperaturasDeUmMes[i];
        }

        if (menorTemperatura > temperaturasDeUmMes[i]) {
            menorTemperatura = temperaturasDeUmMes[i];
        }
    }

    let mediaTemperatura = somaTemperatura / temperaturasDeUmMes.length;

    return {
        minima: menorTemperatura,
        maxima: maiorTemperatura,
        media: mediaTemperatura
    };
};

// Corrigir a sintaxe para JavaScript
window.EvapotranspiracaoHargreaves = function(tempMin, tempMax, tempMedia, radExtraterrestre) {
    let eto = 0.0023 * Math.sqrt(tempMax - tempMin) * (tempMedia + 17.8) * Math.sqrt(radExtraterrestre);
    return eto;
};

let indiceAtualEvapo = 0;

window.InseriNoGraficoEvapo = function (evapodomes) {
    // Inicializa o array de dados com 12 posições nulas na primeira execução
    if (indiceAtualEvapo === 0) {
        evapotranspiracaoChart.data.datasets[0].data = Array(12).fill(null);
        evapotranspiracaoChart.update();
    }

    // Atualiza o dado na posição atual do índice
    let dadosAtuais = evapotranspiracaoChart.data.datasets[0].data;
    dadosAtuais[indiceAtualEvapo] = parseInt(evapodomes, 10);
    evapotranspiracaoChart.update();

    // Incrementa o índice e reseta se necessário
    indiceAtualEvapo = (indiceAtualEvapo + 1) % 12;
};*/


document.addEventListener('DOMContentLoaded', function () {
    var dados = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Evapotranspiração (mm)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            pointBorderWidth: 1,
            pointRadius: 3,
            pointHoverRadius: 5,
            data: Array(12).fill(null)
        }]
    };

    var opcoes = {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Evapotranspiração (mm)'
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Mês'
                }
            }]
        }
    };

    var contexto = document.getElementById('EvapoTranspiracao').getContext('2d');

    // Defina a instância do gráfico em um escopo acessível
    window.graficoEvapotranspiracao = new Chart(contexto, {
        type: 'line',
        data: dados,
        options: opcoes
    });
});

// Funções

window.calcularMinimaMediaMaximaTemp = function (temperaturasDoMes) {
    let maiorTemperatura = temperaturasDoMes[0];
    let menorTemperatura = temperaturasDoMes[0];
    let somaTemperatura = 0;

    for (let i = 0; i < temperaturasDoMes.length; i++) {
        somaTemperatura += temperaturasDoMes[i];

        if (maiorTemperatura < temperaturasDoMes[i]) {
            maiorTemperatura = temperaturasDoMes[i];
        }

        if (menorTemperatura > temperaturasDoMes[i]) {
            menorTemperatura = temperaturasDoMes[i];
        }
    }

    let mediaTemperatura = somaTemperatura / temperaturasDoMes.length;

    return {
        minima: menorTemperatura,
        maxima: maiorTemperatura,
        media: mediaTemperatura
    };
};

window.calcularEvapotranspiracaoHargreaves = function(tempMin, tempMax, tempMedia, radiacaoExtraterrestre) {
    let eto = 0.0023 * Math.sqrt(tempMax - tempMin) * (tempMedia + 17.8) * Math.sqrt(radiacaoExtraterrestre);
    return eto;
};

let indiceAtualEvapotranspiracao = 0;

window.inserirNoGraficoEvapo = function (evapoDoMes) {
    // Inicializa o array de dados com 12 posições nulas na primeira execução
    if (indiceAtualEvapotranspiracao === 0) {
        graficoEvapotranspiracao.data.datasets[0].data = Array(12).fill(null);
        graficoEvapotranspiracao.update();
    }

    // Atualiza o dado na posição atual do índice
    let dadosAtuais = graficoEvapotranspiracao.data.datasets[0].data;
    dadosAtuais[indiceAtualEvapotranspiracao] = parseInt(evapoDoMes, 10);
    graficoEvapotranspiracao.update();

    // Incrementa o índice e reseta se necessário
    indiceAtualEvapotranspiracao = (indiceAtualEvapotranspiracao + 1) % 12;
};


    
