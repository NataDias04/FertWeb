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

    var evapotranspiracaoChart = new Chart(ctx, {
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
        menor: menorTemperatura,
        maior: maiorTemperatura,
        media: mediaTemperatura
    };
}

    //método Hargreaves
    window.EvapotranspiracaoHargreaves = function(double tempMin, double tempMax, double tempMedia, double radExtraterrestre)
    {
        double eto = 0.0023 * Math.Sqrt(tempMax - tempMin) * (tempMedia + 17.8) * Math.Sqrt(radExtraterrestre);
        return eto;
    }

    let indiceAtualEvapo = 0;

window.InseriNoGraficoEvapo = function (evapodomes) {
    // Inicializa o array de dados com 24 posições nulas na primeira execução
    if (indiceAtualEvapo === 0) {
        Chart.data.datasets[0].data = Array(24).fill(null);
        Chart.update();
    }

    // Atualiza o dado na posição atual do índice
    let dadosAtuais = Chart.data.datasets[0].data;
    dadosAtuais[indiceAtualEvapo] = parseInt(evapodomes, 10);
    Chart.update();

    // Incrementa o índice e reseta se necessário
    indiceAtualEvapo = (indiceAtualEvapo + 1) % 12;
}*/

document.addEventListener('DOMContentLoaded', function () {
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
};

    
