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
            data: [50, 60, 70, 80, 90, 100, 110, 120, 110, 90, 70, 60]
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

function minimaMediaMaximaTemp(temperaturasDeUmMes) {
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
    public double EvapotranspiracaoHargreaves(double tempMin, double tempMax, double tempMedia, double radExtraterrestre)
    {
        double eto = 0.0023 * Math.Sqrt(tempMax - tempMin) * (tempMedia + 17.8) * Math.Sqrt(radExtraterrestre);
        return eto;
    }

    public void InseriNoGraficoEvapo(evapodomes){
        
    }
    
