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
                    min: 0.001
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
    dadosAtuais[indiceAtualEvapotranspiracao] = evapoDoMes;
    graficoEvapotranspiracao.update();

    // Incrementa o índice e reseta se necessário
    indiceAtualEvapotranspiracao = (indiceAtualEvapotranspiracao + 1) % 12;
};


    
