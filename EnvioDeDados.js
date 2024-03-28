const client = mqtt.connect('wss://4b8d62e12d9744ec8e2fdea77a5e66e2.s1.eu.hivemq.cloud:8884/mqtt', {
    clientId: '123projetopi',
    username: 'projetopi',
    password: '12345678'
});

const topic = 'meu/topico';

client.on('connect', function () {
    console.log('Conectado ao broker MQTT');
});

function enviarMensagem() {
    const mensagem = 'Olá, Raspberry Pi!'; // Defina a mensagem que deseja enviar
    client.publish(topic, mensagem, function (err) {
        if (err) {
            console.error('Erro ao enviar mensagem:', err);
        } else {
            console.log('Mensagem enviada com sucesso:', mensagem);
        }
    });
}

// Função chamada quando o botão de enviar é clicado
document.getElementById('botaoEnviar').addEventListener('click', enviarMensagem);