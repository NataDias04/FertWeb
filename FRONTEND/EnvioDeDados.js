import { ClienteMqtt, isConnected } from './ClienteMqtt.js';

const topico = 'Api/Raspberry';

if (isConnected) {
    console.log('Conectado ao broker MQTT para envio de dados');
}

document.getElementById("botao-enviar").addEventListener("click", function() {
    enviarMensagem();
});

function enviarMensagem() {
    const mensagem = 'Ligar o led';
    ClienteMqtt.publish(topico, mensagem, function (erro) {
        if (erro) {
            console.error('Erro ao enviar mensagem:', erro);
            exibirErro('Erro ao enviar mensagem: ' + erro);
        } else {
            console.log('Mensagem enviada com sucesso:', mensagem);
        }
    });
}

function exibirErro(erro) {
    const elementoErro = document.getElementById('erro');
    elementoErro.textContent = erro;
    elementoErro.style.color = 'red';
}
