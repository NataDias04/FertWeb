/*import { ClienteMqtt, isConnected } from './ClienteMqtt.js';
import { adicionarTemperatura } from './ComandosBd.js';

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
    const chaveTemperatura = adicionarTemperatura(mensagem.toString());
    console.log("Temperatura adicionada com sucesso. Chave gerada:", chaveTemperatura);
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
});*/

import { ClienteMqtt, isConnected } from './ClienteMqtt.js';
import { adicionarTemperatura } from './ComandosBd.js';

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
    const [temperatura, umidade] = ultimaMensagem.split(':');
    exibirTemperaturaNaPagina(temperatura);
    exibirUmidadeNaPagina(umidade);
    adicionarMensagemAoGrafico(temperatura, umidade);
    const chaveTemperatura = adicionarTemperatura(temperatura);
    console.log("Temperatura adicionada com sucesso. Chave gerada:", chaveTemperatura);
});

// Funções

function exibirTemperaturaNaPagina(temperatura) {
    const listaMensagens = document.getElementById('mensagens');
    listaMensagens.innerHTML = '';
    const novaMensagem = document.createElement('li');
    novaMensagem.textContent = `${temperatura}ºC`;
    listaMensagens.appendChild(novaMensagem);
}

function exibirUmidadeNaPagina(umidade) {
    fetch('umidade.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const listaUmidade = doc.getElementById('umidades');
            if (listaUmidade) {
                listaUmidade.innerHTML = '';
                const novaUmidade = document.createElement('li');
                novaUmidade.textContent = `${umidade}%`;
                listaUmidade.appendChild(novaUmidade);
                document.body.appendChild(listaUmidade);
            }
        })
        .catch(error => console.error('Erro ao atualizar umidade:', error));
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
