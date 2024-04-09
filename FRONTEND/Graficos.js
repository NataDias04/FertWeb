// Função para inicializar o gráfico de temperatura do solo
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
        title: 'Controle de Temperatura do Solo'
    };

    // Renderizar o gráfico de temperatura do solo
    Plotly.newPlot('graficoTemperaturaSolo', dataTemperaturaSolo, layoutTemperaturaSolo);
}

// Função para ajustar o tamanho do gráfico em resposta a redimensionamento da janela
function ajustarTamanhoGrafico() {
    var larguraJanela = window.innerWidth;

    // Verificar se a largura da janela é menor que 768px
    if (larguraJanela < 768) {
        // Definir novas dimensões para o gráfico
        var novaLargura = 0.9 * larguraJanela; // Reduzir a largura para 90% da largura da janela
        var novaAltura = 300; // Definir uma altura fixa para o gráfico em telas menores

        // Atualizar as dimensões do gráfico
        Plotly.relayout('graficoTemperaturaSolo', {
            width: novaLargura,
            height: novaAltura
        });
    }
}

// Inicializar o gráfico de temperatura do solo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initGraficoTemperaturaSolo();

    // Adicionar um ouvinte de evento para redimensionamento da janela
    window.addEventListener('resize', ajustarTamanhoGrafico);
});

