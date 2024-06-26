document.addEventListener('DOMContentLoaded', function () {
    // Primeiro gráfico: Temperatura diária
    var dadosTemperaturaDiaria = {
        labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00",
            "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        datasets: [{
            label: "Temperatura °C",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: Array(24).fill(null)
        }]
    };

    var opcoesTemperaturaDiaria = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var contextoTemperaturaDiaria = document.getElementById('TemperaturaDiaria').getContext('2d');
    var graficoTemperaturaDiaria = new Chart(contextoTemperaturaDiaria, {
        type: 'bar',
        data: dadosTemperaturaDiaria,
        options: opcoesTemperaturaDiaria
    });

    var indiceAtual = 0;

    // Segundo gráfico: Médias da semana
    var dadosMediasSemana = {
        labels: ["seg.", "ter.", "qua.", "qui.", "sex.", "sab.", "dom."],
        datasets: [{
            label: "Temperatura °C",
            fill: false,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            data: Array(7).fill(null)
        }]
    };

    var opcoesMediasSemana = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var contextoMediasSemana = document.getElementById('MediasDaSemana').getContext('2d');
    var graficoMediasSemana = new Chart(contextoMediasSemana, {
        type: 'bar',
        data: dadosMediasSemana,
        options: opcoesMediasSemana
    });

    var indiceAtualSemana = 0;
    var contagemDeSemanas = 0;
    var somaTemperaturasDoMes = 0;
    var semanasParaOMes = 1; // Ajuste conforme necessário
    let listaMedias = []; 

    // Terceiro gráfico: Médias do ano
    var dadosMediasAno = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Temperatura Média °C",
            fill: false,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            data: Array(12).fill(null)
        }]
    };

    var opcoesMediasAno = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var contextoMediasAno = document.getElementById('MediasDoAno').getContext('2d');
    var graficoMediasAno = new Chart(contextoMediasAno, {
        type: 'line',
        data: dadosMediasAno,
        options: opcoesMediasAno
    });

    var indiceAtualAno = 0;

    // Funções
    
    window.adicionarMensagemAoGrafico = function (mensagem) {
        if (indiceAtual === 0) {
             graficoTemperaturaDiaria.data.datasets[0].data = Array(24).fill(null);
             graficoTemperaturaDiaria.update();
        }
        var dadosAtuais = graficoTemperaturaDiaria.data.datasets[0].data;
        dadosAtuais[indiceAtual] = parseInt(mensagem);
        graficoTemperaturaDiaria.update();
        indiceAtual = (indiceAtual + 1) % 24;

        if (indiceAtual === 0) {
            var temperaturas = dadosTemperaturaDiaria.datasets[0].data.filter(temp => temp !== null);
            var somaDasTemperaturas = temperaturas.reduce((a, b) => a + b, 0);
            var mediaDeTemperaturas = somaDasTemperaturas / temperaturas.length;
            adicionarMensagemAoGraficoTempDaSemana(mediaDeTemperaturas);
        }
    }

    window.adicionarMensagemAoGraficoTempDaSemana = function (media) {
        var dadosAtuaisSemana = graficoMediasSemana.data.datasets[0].data;
        dadosAtuaisSemana[indiceAtualSemana] = media;
        graficoMediasSemana.update();

        somaTemperaturasDoMes += media;
        indiceAtualSemana = (indiceAtualSemana + 1) % 7;
        listaMedias.push(media);
        if (indiceAtualSemana === 0) {
            contagemDeSemanas += 1;

            if (contagemDeSemanas === semanasParaOMes) {
                var totalDoMes = graficoMediasSemana.data.datasets[0].data.filter(temp => temp !== null);
                var mediaMensal = somaTemperaturasDoMes / totalDoMes.length;
                adicionarMensagemAoGraficoTempDoAno(mediaMensal);
                console.log(listaMedias);
                const { minima, maxima, media } = calcularMinimaMediaMaximaTemp(listaMedias);
                console.log(minima, maxima, media);
                const evapo = calcularEvapotranspiracaoHargreaves(minima, maxima, media, 15.0);
                console.log(evapo);
                inserirNoGraficoEvapo(evapo);
                listaMedias = [];
                contagemDeSemanas = 0;
                somaTemperaturasDoMes = 0;
            }

            // Limpar os dados semanais após cada semana completada
            graficoMediasSemana.data.datasets[0].data = Array(7).fill(null);
            graficoMediasSemana.update();
        }
    }

    window.adicionarMensagemAoGraficoTempDoAno = function (media) {
        var dadosAtuaisDoAno = graficoMediasAno.data.datasets[0].data;
        dadosAtuaisDoAno[indiceAtualAno] = media;
        graficoMediasAno.update();

        indiceAtualAno = (indiceAtualAno + 1) % 12;
    }
});
