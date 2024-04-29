document.addEventListener('DOMContentLoaded', function () {
    // Primeiro gráfico: Temperatura diária
    var data1 = {
      labels: ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00",
                "11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
      datasets: [{
        label: "Temperatura °C",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [20, 22, 23, 24, 25, 23, 21,20, 22, 23, 24, 25, 23, 21,20, 22, 23, 24, 25, 23, 21,15,12,11],
      }]
    };
  
    var options1 = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  
    var ctx1 = document.getElementById('TemperaturaDiaria').getContext('2d');
    var myChart1 = new Chart(ctx1, {
      type: 'bar',
      data: data1,
      options: options1
    });
  
    // Segundo gráfico: Médias do ano
    var data2 = {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      datasets: [{
        label: "Médias do Ano",
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [15, 16, 17, 18, 20, 22, 24, 25, 24, 21, 18, 16], // Dados de exemplo
      }]
    };
  
    var options2 = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  
    var ctx2 = document.getElementById('MediasDoAno').getContext('2d');
    var myChart2 = new Chart(ctx2, {
      type: 'line',
      data: data2,
      options: options2
    });

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

// Configurações do gráfico
const config = {
    type: 'pie',
    data: dadosNPK,
};

// Criação do gráfico de pizza
var graficoNutricaoSolo = new Chart(
    document.getElementById('graficoNutricaoSolo'),
    config
);
    
  });
