document.addEventListener('DOMContentLoaded', function () {
    const dadosNPK = {
        labels: ['Nitrogênio', 'Fósforo', 'Potássio'],
        datasets: [{
            label: 'Nutrição do Solo NPK',
            data: [30, 40, 30], // Valores percentuais para cada nutriente
            backgroundColor: [
                'rgb(255, 99, 132)', // Cor para Nitrogênio
                'rgb(54, 162, 235)', // Cor para Fósforo
                'rgb(255, 205, 86)' // Cor para Potássio
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut', // Use 'doughnut' para criar um gráfico de rosquinha
        data: dadosNPK,
        options: {
            aspectRatio: 1, // Esta é a proporção altura/largura
            responsive: false
        }
    };

    var graficoNutricaoSolo = new Chart(
        document.getElementById('graficoNutricaoSolo'),
        config
    );
});

