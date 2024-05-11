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
        data: Array(24).fill(null)
      }]
    };
  
    var options1 = {
      scales: {
        y: [{
            beginAtZero: true
        }]
      }
    };
  
    var ctx1 = document.getElementById('TemperaturaDiaria').getContext('2d');
    var myChart1 = new Chart(ctx1, {
      type: 'bar',
      data: data1,
      options: options1
    });

    var indiceAtual = 0;

    window.adicionarMensagemAoGrafico = function(mensagem) {

        if (indiceAtual === 0) {
            
            myChart1.data.datasets[0].data = Array(24).fill(null);

            myChart1.update();;
        }
        
        var dadosAtuais = myChart1.data.datasets[0].data;

        dadosAtuais[indiceAtual] = parseInt(mensagem);

        myChart1.update();

        indiceAtual = (indiceAtual + 1) % 24;
        
        if (indiceAtual === 24) {
            indiceAtual = 0;
        }
    }
  
    // Segundo gráfico: Médias da semana
    
    var data2 = {
      labels: ["seg.","ter.","qua.","qui.","sex.","sab.","dom."],
      datasets: [{
        label: "Temperatura °C",
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [15, 16, 17, 18, 20, 22, 24]
      }]
    };
  
    var options2 = {
      scales: {
        y: [{
            beginAtZero: true
        }]
      }
    };
  
    var ctx2 = document.getElementById('MediasDaSemana').getContext('2d');
    var myChart2 = new Chart(ctx2, {
      type: 'bar',
      data: data2,
      options: options2
    });    

    // Terceiro gráfico: Médias do ano
    
    var data3 = {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      datasets: [{
        label: "Temperatura Média °C",
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [18, 19, 20, 21, 22, 23, 24, 23, 22, 20, 19, 18] 
        }]
    };

    var options3 = {
      scales: {
        y: [{
            beginAtZero: true
        }]
      }
    };
    
    var ctx3 = document.getElementById('MediasDoAno').getContext('2d');
    var myChart3 = new Chart(ctx3, {
      type: 'line',
      data: data3,
      options: options3
    });
});
