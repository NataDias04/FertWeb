import { ClienteMqtt, isConnected } from './ClienteMqtt.js';
import { adicionarTemperatura } from './ComandosBd.js';

const topico = 'Raspberry/Api';

let ultimaMensagem = '';

document.addEventListener("DOMContentLoaded", function() {
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
        
        if (window.location.pathname === '/index.html') {
        adicionarMensagemAoGrafico(temperatura);
        }
        
        if (window.location.pathname === '/umidade.html') {
        adicionarMensagemAoGraficoUmidade(umidade);
        }
        const chaveTemperatura = adicionarTemperatura(temperatura);
        console.log("Temperatura adicionada com sucesso. Chave gerada:", chaveTemperatura);
    });

    // Funções

    function exibirTemperaturaNaPagina(temperatura) {
        const listaMensagens = document.getElementById('mensagens-temperatura');
        if (listaMensagens) {
            listaMensagens.innerHTML = '';
            const novaMensagem = document.createElement('li');
            novaMensagem.textContent = `${temperatura}ºC`;
            listaMensagens.appendChild(novaMensagem);
        } else {
            console.error('Elemento mensagens-temperatura não encontrado.');
        }
    }

    function exibirUmidadeNaPagina(umidade) {
        const listaMensagens = document.getElementById('mensagens-umidade');
        if (listaMensagens) {
            listaMensagens.innerHTML = '';
            const novaMensagem = document.createElement('li');
            novaMensagem.textContent = `${umidade}%`;
            listaMensagens.appendChild(novaMensagem);
        } else {
            console.error('Elemento mensagens-umidade não encontrado.');
        }
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
});
