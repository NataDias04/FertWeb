document.addEventListener('DOMContentLoaded', function () {
var dadosUmidadeDiaria = {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00",
        "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    datasets: [{
        label: "Umidade %",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: Array(24).fill(null)
    }]
};

var opcoesUmidadeDiaria = {
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var contextoUmidadeDiaria = document.getElementById('UmidadeDiaria').getContext('2d');
var graficoUmidadeDiaria = new Chart(contextoUmidadeDiaria, {
    type: 'bar',
    data: dadosUmidadeDiaria,
    options: opcoesUmidadeDiaria
});

// Configurar gráficos para médias semanais e anuais
var dadosMediasSemanaUmidade = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [{
        label: "Média Semanal de Umidade",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: Array(7).fill(null)
    }]
};

var contextoMediasSemanaUmidade = document.getElementById('MediasSemanaUmidade').getContext('2d');
var graficoMediasSemanaUmidade = new Chart(contextoMediasSemanaUmidade, {
    type: 'bar',
    data: dadosMediasSemanaUmidade,
    options: opcoesUmidadeDiaria
});

var dadosMediasAnoUmidade = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "Média Anual de Umidade",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: Array(12).fill(null)
    }]
};

var contextoMediasAnoUmidade = document.getElementById('MediasAnoUmidade').getContext('2d');
var graficoMediasAnoUmidade = new Chart(contextoMediasAnoUmidade, {
    type: 'bar',
    data: dadosMediasAnoUmidade,
    options: opcoesUmidadeDiaria
});

    var indiceAtual = 0;
    var indiceAtualAno = 0;
    var indiceAtualSemana = 0;
    var contagemDeSemanas = 0;
    var somaTemperaturasDoMes = 0;
    var semanasParaOMes = 1; // Ajuste conforme necessário
    let listaMedias = []; 
    
    window.adicionarMensagemAoGraficoUmidade = function (mensagem) {
    if (indiceAtual === 0) {
        graficoUmidadeDiaria.data.datasets[0].data = Array(24).fill(null);
        graficoUmidadeDiaria.update();
    }
    
    var dadosAtuais = graficoUmidadeDiaria.data.datasets[0].data;
    dadosAtuais[indiceAtual] = parseInt(mensagem);
    graficoUmidadeDiaria.update();
    indiceAtual = (indiceAtual + 1) % 24;

    if (indiceAtual === 0) {
        var umidades = dadosUmidadeDiaria.datasets[0].data.filter(umid => umid !== null);
        var somaDasUmidades = umidades.reduce((a, b) => a + b, 0);
        var mediaDeUmidades = somaDasUmidades / umidades.length;
        adicionarMensagemAoGraficoUmidadeDaSemana(mediaDeUmidades);
    }
}

window.adicionarMensagemAoGraficoUmidadeDaSemana = function (media) {
    var dadosAtuaisSemana = graficoMediasSemanaUmidade.data.datasets[0].data;
    dadosAtuaisSemana[indiceAtualSemana] = media;
    graficoMediasSemanaUmidade.update();

    somaUmidadesDoMes += media;
    indiceAtualSemana = (indiceAtualSemana + 1) % 7;
    listaMedias.push(media);
    if (indiceAtualSemana === 0) {
        contagemDeSemanas += 1;

        if (contagemDeSemanas === semanasParaOMes) {
            var totalDoMes = graficoMediasSemanaUmidade.data.datasets[0].data.filter(umid => umid !== null);
            var mediaMensal = somaUmidadesDoMes / totalDoMes.length;
            adicionarMensagemAoGraficoUmidadeDoAno(mediaMensal);
            console.log(listaMedias);
            const { minima, maxima, media } = calcularMinimaMediaMaximaUmidade(listaMedias);
            console.log(minima, maxima, media);
            const evapo = calcularEvapotranspiracaoHargreaves(minima, maxima, media, 15.0);
            console.log(evapo);
            inserirNoGraficoEvapo(evapo);
            listaMedias = [];
            contagemDeSemanas = 0;
            somaUmidadesDoMes = 0;
        }

        // Limpar os dados semanais após cada semana completada
        graficoMediasSemanaUmidade.data.datasets[0].data = Array(7).fill(null);
        graficoMediasSemanaUmidade.update();
    }
}

window.adicionarMensagemAoGraficoUmidadeDoAno = function (media) {
    var dadosAtuaisDoAno = graficoMediasAnoUmidade.data.datasets[0].data;
    dadosAtuaisDoAno[indiceAtualAno] = media;
    graficoMediasAnoUmidade.update();

    indiceAtualAno = (indiceAtualAno + 1) % 12;
}

});



