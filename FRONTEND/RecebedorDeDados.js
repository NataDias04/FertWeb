const mqttClient = require('./mqttClient');
const topic = 'Raspberry/Api';
let ultimaMensagem = '';
let CodigoDaUltimaMensagem = "";
let isConnected = false;

client.on('message', function (receivedTopic, message) {

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
}

