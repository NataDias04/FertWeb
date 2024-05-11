const { mqttClient, isConnected } = require('./mqttClient');
const topic = 'Api/Raspberry';

function enviarMensagem() {
    const mensagem = 'Olá, Raspberry Pi!';
    client.publish(topic, mensagem, function (err) {
        if (err) {
            console.error('Erro ao enviar mensagem:', err);
            exibirErro('Erro ao enviar mensagem: ' + err);
        } else {
            console.log('Mensagem enviada com sucesso:', mensagem);
        }
    });
}

document.getElementById("botao-enviar").addEventListener("click", function() {
    enviarMensagem();
});

function exibirErro(erro) {
    const erroElement = document.getElementById('erro');
    erroElement.textContent = erro;
    erroElement.style.color = 'red';
}
