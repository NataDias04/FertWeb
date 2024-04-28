var ctx = document.querySelector(".line-chart");

// trabalha com três instancia type(tipo de grafico), data(dado), options(configuraçoes do grafico)

var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
        datasets:[{
            label: "TEMPERATURA DO SOLO",
            data: [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10]


        }]
    }
});
