function initGraficoTemperaturaSolo() {
    // Dados do gráfico de temperatura do solo
    var dataTemperaturaSolo = [{
        x: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        y: [25, 26, 27, 28, 29, 30], // Dados de exemplo para temperatura do solo
        type: 'line',
        name: 'Temperatura do Solo (°C)'
    }];

    // Layout do gráfico de temperatura do solo
    var layoutTemperaturaSolo = {
        xaxis: {title: 'Mês'},
        yaxis: {title: 'Temperatura (°C)'},
        title: 'Controle de Temperatura do Solo',
        width: 400, // Define a largura do gráfico em pixels
        height: 300
    };

    // Renderizar o gráfico de temperatura do solo
    Plotly.newPlot('graficoTemperaturaSolo', dataTemperaturaSolo, layoutTemperaturaSolo);
}

// Inicializar o gráfico de temperatura do solo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initGraficoTemperaturaSolo();
});

