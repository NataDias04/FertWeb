const client = mqtt.connect('wss://4b8d62e12d9744ec8e2fdea77a5e66e2.s1.eu.hivemq.cloud:8884/mqtt', {
    clientId: '123projetopi',
    username: 'projetopi',
    password: '12345678'
});

const topic = 'Raspberry/Api';

client.on('connect', function () {
    console.log('Conectado ao broker MQTT');

    client.subscribe(topic, function (err) {
        if (err) {
            console.error('Erro ao se inscrever no tópico', err);
        } else {
            console.log('Inscrição no tópico bem-sucedida');
        }
    });
});

client.on('message', function (receivedTopic, message) {
    console.log('Mensagem recebida no tópico', receivedTopic, ':', message.toString());

    exibirMensagemNaPagina(message.toString());
});

function exibirMensagemNaPagina(mensagem) {
    const listaMensagens = document.getElementById('mensagens');
    const novaMensagem = document.createElement('li');
    novaMensagem.textContent = mensagem;
    listaMensagens.appendChild(novaMensagem);
}

