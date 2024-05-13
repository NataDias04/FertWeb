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


import { mqttClient, isConnected } from './mqttClient.js';
const topic = 'Raspberry/Api';
let ultimaMensagem = '';
let CodigoDaUltimaMensagem = '';

// Verifica se o cliente está conectado ao broker MQTT
if (isConnected) {
    console.log('Conectado ao broker MQTT para recebimento de dados');
}

// Callback para mensagens recebidas
mqttClient.on('message', function (receivedTopic, message) {
    let CodigoDaNovaMensagem = message.toString() + ' (' + new Date().toLocaleString() + ')';
    
    // Verifica se a mensagem é diferente da última mensagem recebida
    if (CodigoDaNovaMensagem !== CodigoDaUltimaMensagem) {
        console.log('Mensagem recebida no tópico', receivedTopic, ':', message.toString());
        
        // Chama a função para exibir a última mensagem na página
        exibirUltimaMensagemNaPagina();
        
        // Chama a função para adicionar a mensagem ao gráfico
        adicionarMensagemAoGrafico(message.toString());
        
        // Atualiza o código da última mensagem recebida
        CodigoDaUltimaMensagem = CodigoDaNovaMensagem;
    }  
});

// Função para exibir a última mensagem na página
function exibirUltimaMensagemNaPagina() {
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
});
