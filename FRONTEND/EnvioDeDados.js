/*const client = mqtt.connect('wss://4b8d62e12d9744ec8e2fdea77a5e66e2.s1.eu.hivemq.cloud:8884/mqtt', {
    clientId: '123projetopi',
    username: 'projetopi',
    password: '12345678'
}); 

const topic = 'Api/Raspberry';

client.on('connect', function () {
    console.log('Conectado ao broker MQTT Api/Raspberry');

    client.subscribe(topic, function (err) {
        if (err) {
            console.error('Erro ao se inscrever no tópico Api/Raspberry', err);
        } else {
            console.log('Inscrição no tópico bem-sucedida Api/Raspberry');
        }
    });
});*/

function enviarMensagem() {
    const mensagem = 'Olá, Raspberry Pi!'; // Defina a mensagem que deseja enviar
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
    // Aqui você chama a função para enviar a mensagem para a Raspberry Pi
    enviarMensagem();
});

function exibirErro(erro) {
    const erroElement = document.getElementById('erro');
    erroElement.textContent = erro;
    erroElement.style.color = 'red'; // Define a cor do texto para vermelho para indicar erro
}
