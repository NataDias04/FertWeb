import { getDatabase, ref, set } from "./firebase/database";

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
    set(ref(database, 'temperaturas/' + timestamp), data);

    // Retorna o timestamp como identificador único, se necessário
    return timestamp;

    
}
