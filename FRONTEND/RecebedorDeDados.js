const client = mqtt.connect('wss://4b8d62e12d9744ec8e2fdea77a5e66e2.s1.eu.hivemq.cloud:8884/mqtt', {
    clientId: '123projetopi',
    username: 'projetopi',
    password: '12345678'
});

const topic = 'Raspberry/Api';
let ultimaMensagem = '';
let isConnected = false; // Variável para rastrear o estado da conexão

client.on('connect', function () {
    if (!isConnected) { // Verifica se ainda não está conectado
        isConnected = true; // Atualiza o estado da conexão
        console.log('Conectado ao broker MQTT');

        client.subscribe(topic, function (err) {
            if (err) {
                console.error('Erro ao se inscrever no tópico', err);
            } else {
                console.log('Inscrição no tópico bem-sucedida');
            }
        });
    }
});

client.on('message', function (receivedTopic, message) {
    console.log('Mensagem recebida no tópico', receivedTopic, ':', message.toString());

    ultimaMensagem = message.toString();
    exibirUltimaMensagemNaPagina();
    //testeDeErro();
    adicionarMensagemAoGrafico(ultimaMensagem);
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

