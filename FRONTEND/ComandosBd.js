import { app } from './ConexaoBd.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

// Função para adicionar temperatura ao banco de dados
export function adicionarTemperatura(temperatura) {
    const database = getDatabase();
    const timestamp = new Date().toISOString().replace(/[.#$/[\]]/g, '_'); // Substitui caracteres inválidos

    const data = {
        valor: temperatura,
        timestamp: timestamp
    };

    return set(ref(database, 'temperaturas/' + encodeURIComponent(timestamp)), data);
}
