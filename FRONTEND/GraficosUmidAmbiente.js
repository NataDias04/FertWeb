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
});
