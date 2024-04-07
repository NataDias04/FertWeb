document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('meuGrafico');
    
    // Verificar se o elemento canvas foi encontrado
    if (canvas) {
        // Contexto do canvas
        const ctx = canvas.getContext('2d');

        // Dados do gráfico (apenas como exemplo)
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

        // Inicializando o gráfico
        const myChart = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico (bar, line, pie, etc.)
            data: data,
            options: options
        });
    } else {
        console.error('Elemento canvas não encontrado.');
    }
});


