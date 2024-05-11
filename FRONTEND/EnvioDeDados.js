import { mqttClient, isConnected } from './mqttClient.js';
const topic = 'Api/Raspberry';

if (isConnected) {
    console.log('Conectado ao broker MQTT para envio de dados');
}

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
