import { mqttClient, isConnected } from './mqttClient.js';
const topic = 'Raspberry/Api';
let ultimaMensagem = '';

    // Subscrever ao tópico
mqttClient.subscribe(topic, function (err) {
    if (err) {
        console.error('Erro ao se inscrever no tópico', err);
    } else {
        console.log('Inscrição no tópico bem-sucedido');
        }
});

// Callback para mensagens recebidas
mqttClient.on('message', function (receivedTopic, message) {
    console.log('Mensagem recebida no tópico', receivedTopic, ':', message.toString());

    // Atualizar a última mensagem
    ultimaMensagem = message.toString();
    
    exibirUltimaMensagemNaPagina()
    adicionarMensagemAoGrafico(message.toString());
});

function exibirUltimaMensagemNaPagina() {
    const listaMensagens = document.getElementById('mensagens');
    
    // Limpar mensagens antigas
    listaMensagens.innerHTML = '';

    // Criar novo item de lista com a última mensagem
    const novaMensagem = document.createElement('li');
    novaMensagem.textContent = ultimaMensagem;
    listaMensagens.appendChild(novaMensagem);
}

mqttClient.on('connect', function () {
    console.log('Conectado ao broker MQTT raspberry/api');
    
    if (isConnected) {
        console.log('Conectado ao broker MQTT para recebimento de dados');
    }
});

mqttClient.on('error', function (error) {
    console.error('Erro de conexão:', error);
});

