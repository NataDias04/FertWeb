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

            myChart1.update();
        }
        
        var dadosAtuais = myChart1.data.datasets[0].data;

        dadosAtuais[indiceAtual] = parseInt(mensagem);

        myChart1.update();

        indiceAtual = (indiceAtual + 1) % 24;

        
        if (indiceAtual === 24) {
            
            var temperaturas = data1.datasets[0].data;
            var SomaDasTemperaturas = 0;
            var MediaDeTemperaturas = 0;
            for(var i = 0; i < temperaturas.length; i++){
                SomaDasTemperaturas = SomaDasTemperaturas + temperaturas[i];
            }

            MediaDeTemperaturas = SomaDasTemperaturas / temperaturas.length;

            adicionarMensagemAoGraficoTempDaSemana(MediaDeTemperaturas);
            
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
        data: Array(7).fill(null)
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

    var indiceAtualSemana = 0;
    var ContagemDeSemanas = 0;
    var SomaTemperaturasDoMes = 0;
    var MediasDeTemperaturaDoMes = 0;
    window.adicionarMensagemAoGraficoTempDaSemana = function(media){
        if (indiceAtualSemana === 0) {
            
            myChart2.data.datasets[0].data = Array(7).fill(null);

            myChart2.update();;
        }

        var dadosAtuaisSemana = myChart2.data.datasets[0].data;

        dadosAtuaisSemana[indiceAtualSemana] = parseInt(media);

        myChart2.update();

        indiceAtualSemana = (indiceAtualSemana + 1) % 7;

        var currentMonth = new Date().getMonth();
        var daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
        var SemanasDoMes = Math.ceil(daysInMonth / 7);
        
        if(indiceAtualSemana === 7){
            var temperaturasDaSemana = data2.datasets[0].data;
            for(var i = 0 ; i < temperaturasDaSemana.length; i++){
               SomaTemperaturasDoMes = SomaTemperaturasDoMes + temperaturasDaSemana[i]; 
            }
            ContagemDeSemanas = ContagemDeSemanas + 1;
            indiceAtualSemana = 0;
        }

        if(ContagemDeSemanas === SemanasDoMes){
            MediasDeTemperaturaDoMes =   SomaTemperaturasDoMes/temperaturasDaSemana.length;
            adicionarMensagemAoGraficoTempDoAno(MediasDeTemperaturaDoMes);
            ContagemDeSemanas = 0;
        }
    }

    // Terceiro gráfico: Médias do ano
    
    var data3 = {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      datasets: [{
        label: "Temperatura Média °C",
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: Array(12).fill(null)
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

    var indiceAtualDoAno = 0;

    window.adicionarMensagemAoGraficoTempDoAno = function(media){
        if (indiceAtualDoAno === 0) {
            
            myChart3.data.datasets[0].data = Array(12).fill(null);

            myChart3.update();;
        }

        var dadosAtuaisDoAno = myChart3.data.datasets[0].data;

        dadosAtuaisDoAno[indiceAtualDoAno] = parseInt(media);

        myChart3.update();

        indiceAtualDoAno = (indiceAtualDoAno + 1) % 12;

        if(indiceAtualDoAno === 12){
            indiceAtualDoAno = 0;
        }
    }
});



/*document.addEventListener('DOMContentLoaded', function () {
    
    // Primeiro gráfico: Temperatura diária
    var data1 = {
        labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00",
            "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
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
            y: {
                beginAtZero: true
            }
        }
    };

    var ctx1 = document.getElementById('TemperaturaDiaria').getContext('2d');
    var myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: data1,
        options: options1
    });

    var indiceAtual = 0;

    window.adicionarMensagemAoGrafico = function (mensagem) {
        if (indiceAtual === 0) {
            myChart1.data.datasets[0].data = Array(24).fill(null);
            myChart1.update();
        }

        var dadosAtuais = myChart1.data.datasets[0].data;
        dadosAtuais[indiceAtual] = parseInt(mensagem);
        myChart1.update();
        indiceAtual = (indiceAtual + 1) % 24;

        if (indiceAtual === 0) {
            var temperaturas = data1.datasets[0].data;
            var SomaDasTemperaturas = temperaturas.reduce((a, b) => a + b, 0);
            var MediaDeTemperaturas = SomaDasTemperaturas / temperaturas.length;
            adicionarMensagemAoGraficoTempDaSemana(MediaDeTemperaturas);
        }
    }

    // Segundo gráfico: Médias da semana
    var data2 = {
        labels: ["seg.", "ter.", "qua.", "qui.", "sex.", "sab.", "dom."],
        datasets: [{
            label: "Temperatura °C",
            fill: false,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            data: Array(7).fill(null)
        }]
    };

    var options2 = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var ctx2 = document.getElementById('MediasDaSemana').getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: data2,
        options: options2
    });

    var indiceAtualSemana = 0;
    var contagemDeSemanas = 0;
    var somaTemperaturasDoMes = 0;

    window.adicionarMensagemAoGraficoTempDaSemana = function (media) {
        var dadosAtuaisSemana = myChart2.data.datasets[0].data;
        dadosAtuaisSemana[indiceAtualSemana] = media;
        myChart2.update();

        somaTemperaturasDoMes += media;
        indiceAtualSemana = (indiceAtualSemana + 1) % 7;

        var currentMonth = new Date().getMonth();
        var daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
        var semanasDoMes = Math.ceil(daysInMonth / 7);

        if (indiceAtualSemana === 0) {
            contagemDeSemanas += 1;
        }

        if (contagemDeSemanas === semanasDoMes) {
            var mediaMensal = somaTemperaturasDoMes / contagemDeSemanas;
            adicionarMensagemAoGraficoTempDoAno(mediaMensal);
            contagemDeSemanas = 0;
            somaTemperaturasDoMes = 0;
            myChart2.data.datasets[0].data = Array(7).fill(null);
            myChart2.update();
        }
    }

    // Terceiro gráfico: Médias do ano
    var data3 = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Temperatura Média °C",
            fill: false,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            data: Array(12).fill(null)
        }]
    };

    var options3 = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var ctx3 = document.getElementById('MediasDoAno').getContext('2d');
    var myChart3 = new Chart(ctx3, {
        type: 'line',
        data: data3,
        options: options3
    });

    var indiceAtualDoAno = 0;

    window.adicionarMensagemAoGraficoTempDoAno = function (media) {
        var dadosAtuaisDoAno = myChart3.data.datasets[0].data;
        dadosAtuaisDoAno[indiceAtualDoAno] = media;
        myChart3.update();

        indiceAtualDoAno = (indiceAtualDoAno + 1) % 12;
    }
});*/
