/*document.addEventListener('DOMContentLoaded', function () {
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
        type: 'doughnut',
        data: dadosNPK,
        options: {
            aspectRatio: 1,
            responsive: false
        }
    };

    var graficoNutricaoSolo = new Chart(
        document.getElementById('graficoNutricaoSolo'),
        config
    );
});*/


document.addEventListener('DOMContentLoaded', function () {
    const dadosNutricaoSolo = {
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

    const configuracaoGrafico = {
        type: 'doughnut',
        data: dadosNutricaoSolo,
        options: {
            aspectRatio: 1,
            responsive: false
        }
    };

    var graficoNutricaoSolo = new Chart(
        document.getElementById('graficoNutricaoSolo'),
        configuracaoGrafico
    );
});
