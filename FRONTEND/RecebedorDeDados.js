/*import { mqttClient, isConnected } from './mqttClient.js';
const topic = 'Raspberry/Api';
let ultimaMensagem = '';
let CodigoDaUltimaMensagem = "";

if (isConnected) {
    console.log('Conectado ao broker MQTT para recebimento de dados');
}

mqttClient.on('message', function (receivedTopic, message) {

    let CodigoDaNovaMensagem = message.toString() + ' (' + new Date().toLocaleString() + ')';
    
    if(CodigoDaNovaMensagem !== CodigoDaUltimaMensagem){
        console.log('Mensagem recebida no tópico', receivedTopic, ':', message.toString());
        exibirUltimaMensagemNaPagina();
        adicionarMensagemAoGrafico( message.toString());
        CodigoDaUltimaMensagem = CodigoDaNovaMensagem;
    }  
});

function exibirUltimaMensagemNaPagina() {
    const listaMensagens = document.getElementById('mensagens');

    listaMensagens.innerHTML = '';

    const novaMensagem = document.createElement('li');
    novaMensagem.textContent = ultimaMensagem;

    listaMensagens.appendChild(novaMensagem);
}*/


/*import { mqttClient, isConnected } from './mqttClient.js';
const topic = 'Raspberry/Api';
let ultimaMensagem = '';
let CodigoDaUltimaMensagem = '';

console.log(isConnected);

if (isConnected) {
    console.log('Conectado ao broker MQTT para recebimento de dados');
}

// Callback para mensagens recebidas
mqttClient.on('message', function (receivedTopic, message) {
    
        console.log('Mensagem recebida no tópico', receivedTopic, ':', message.toString());

        exibirUltimaMensagemNaPagina();
        
        adicionarMensagemAoGrafico(message.toString());
    });

// Função para exibir a última mensagem na página
function exibirUltimaMensagemNaPagina() {
    console.logs("A função exibe na pagina foi acionada");
    const listaMensagens = document.getElementById('mensagens');
    listaMensagens.innerHTML = '';

    const novaMensagem = document.createElement('li');
    novaMensagem.textContent = ultimaMensagem;

    listaMensagens.appendChild(novaMensagem);
}

// Verifica se o cliente está conectado ao broker MQTT
mqttClient.on('connect', function () {
    console.log('Conectado ao broker MQTT raspberry/api');
});

// Verifica se houve erro na conexão
mqttClient.on('error', function (error) {
    console.error('Erro de conexão:', error);
});*/


import { mqttClient, isConnected } from './mqttClient.js';
const topic = 'Raspberry/Api';
let ultimaMensagem = '';
let CodigoDaUltimaMensagem = '';

cliente.on('connect', function () {
    console.log('Conectado ao broker MQTT');

    cliente.subscribe(topic, function (err) {
        if (err) {
            console.error('Erro ao se inscrever no tópico', err);
        } else {
            console.log('Inscrição no tópico bem-sucedido');
        }
    });
});

// Callback para mensagens recebidas
mqttClient.on('message', function (receivedTopic, message) {
    console.log('Mensagem recebida no tópico', receivedTopic, ':', message.toString());

    exibirUltimaMensagemNaPagina();
    adicionarMensagemAoGrafico(message.toString());
});

// Função para exibir a última mensagem na página
function exibirUltimaMensagemNaPagina() {
    console.log("A função exibe na pagina foi acionada");
    const listaMensagens = document.getElementById('mensagens');
    listaMensagens.innerHTML = '';

    const novaMensagem = document.createElement('li');
    novaMensagem.textContent = ultimaMensagem;

    listaMensagens.appendChild(novaMensagem);
}

// Verifica se o cliente está conectado ao broker MQTT
mqttClient.on('connect', function () {
    console.log('Conectado ao broker MQTT raspberry/api');
    
    if (isConnected) {
        console.log('Conectado ao broker MQTT para recebimento de dados');
        // Agora você pode realizar as operações que dependem da conexão MQTT aqui
    }
});

// Verifica se houve erro na conexão
mqttClient.on('error', function (error) {
    console.error('Erro de conexão:', error);
});

