import { app } from './ConexaoBd.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

// Função para adicionar temperatura ao banco de dados
export function adicionarTemperatura(temperatura) {
    // Obtém uma referência para o banco de dados
    const database = getDatabase();

    // Obtém o timestamp atual
    const timestamp = new Date().toISOString();

    // Define os dados a serem gravados
    const data = {
        valor: temperatura,
        timestamp: timestamp
    };

    // Grava os dados no banco de dados
    return set(ref(database, 'temperaturas/' + encodeURIComponent(timestamp)), data);
}
