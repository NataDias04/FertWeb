import { mqttClient, isConnected } from './mqttClient.js';
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
    
    mqttClient.on('message', function (receivedTopic, message) {
        const novaMensagem = document.createElement('li');
        novaMensagem.textContent = message.toString() + ' (' + new Date().toLocaleString() + ')';
        
        listaMensagens.innerHTML = '';
        listaMensagens.appendChild(novaMensagem);
    });
}

