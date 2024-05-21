import { ClienteMqtt, isConnected } from './ClienteMqtt.js';

const topico = 'Raspberry/Api';

let ultimaMensagem = '';

// Subscrever ao tópico
ClienteMqtt.subscribe(topico, function (err) {
    if (err) {
        console.error('Erro ao se inscrever no tópico', err);
    } else {
        console.log('Inscrição no tópico bem-sucedido');
        }
});

// Callback para mensagens recebidas
ClienteMqtt.on('message', function (RecebidoDoTopico, messagem) {
    console.log('Mensagem recebida no tópico', RecebidoDoTopico, ':', message.toString());
    ultimaMensagem = message.toString();
    exibirUltimaMensagemNaPagina()
    adicionarMensagemAoGrafico(message.toString());
});

function exibirUltimaMensagemNaPagina() {
    const listaMensagens = document.getElementById('mensagens');
    listaMensagens.innerHTML = '';
    const novaMensagem = document.createElement('li');
    novaMensagem.textContent = ultimaMensagem;
    listaMensagens.appendChild(novaMensagem);
}

ClienteMqtt.on('connect', function () {
    console.log('Conectado ao broker MQTT raspberry/api');
    
    if (isConnected) {
        console.log('Conectado ao broker MQTT para recebimento de dados');
    }
});

ClienteMqtt.on('error', function (error) {
    console.error('Erro de conexão:', error);
});

