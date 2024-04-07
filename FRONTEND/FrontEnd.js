function initGraficos() {
    // Dados do gráfico
    var data1 = [{
        x: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        y: [12, 19, 3, 5, 2, 3],
        type: 'bar'
    }];
    
    var data2 = [{
        x: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        y: [5, 10, 8, 15, 7, 9],
        type: 'line'
    }];

    // Layout do gráfico
    var layout = {
        xaxis: {title: 'Mês'},
        yaxis: {title: 'Vendas'}
    };

    // Renderizar os gráficos
    Plotly.newPlot('meuGrafico1', data1, layout);
    Plotly.newPlot('meuGrafico2', data2, layout);
}

// Inicializar os gráficos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initGraficos();
});
