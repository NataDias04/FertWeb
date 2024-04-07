const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Vendas',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'cornflowerblue',
        borderColor: 'cornflowerblue',
        borderWidth: 1
    }]
};

// Opções do gráfico (opcional)
const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Contexto do canvas
const ctx = document.getElementById('meuGrafico').getContext('2d');

// Inicializando o gráfico
const myChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico (bar, line, pie, etc.)
    data: data,
    options: options
});
