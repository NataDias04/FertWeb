function initGraficos() {
    // Dados do gráfico de temperatura
    var dataTemperatura = [{
        x: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        y: [25, 26, 27, 28, 29, 30], // Dados de exemplo para temperatura
        type: 'line',
        name: 'Temperatura (°C)'
    }];

    // Dados do gráfico de umidade do solo
    var dataUmidadeSolo = [{
        x: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        y: [50, 55, 60, 65, 70, 75], // Dados de exemplo para umidade do solo
        type: 'line',
        name: 'Umidade do Solo (%)'
    }];

    // Layout dos gráficos
    var layout = {
        xaxis: {title: 'Mês'},
        yaxis: {title: 'Valor'},
        title: 'Controle de Temperatura e Umidade do Solo'
    };

    // Renderizar os gráficos
    Plotly.newPlot('graficoTemperatura', dataTemperatura, layout);
    Plotly.newPlot('graficoUmidadeSolo', dataUmidadeSolo, layout);
}

// Inicializar os gráficos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initGraficos();
});

