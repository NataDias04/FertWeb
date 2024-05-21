import { ClienteMqtt, isConnected } from './ClienteMqtt.js';

const topico = 'Raspberry/Api';

let ultimaMensagem = '';

// Subscrever ao tópico
ClienteMqtt.subscribe(topico, function (erro) {
    if (erro) {
        console.error('Erro ao se inscrever no tópico', erro);
    } else {
        console.log('Inscrição no tópico bem-sucedida');
    }
});

// Callback para mensagens recebidas
ClienteMqtt.on('message', function (recebidoDoTopico, mensagem) {
    console.log('Mensagem recebida no tópico', recebidoDoTopico, ':', mensagem.toString());
    ultimaMensagem = mensagem.toString();
    exibirUltimaMensagemNaPagina();
    adicionarMensagemAoGrafico(mensagem.toString());
});

// Funções

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

ClienteMqtt.on('error', function (erro) {
    console.error('Erro de conexão:', erro);
});


