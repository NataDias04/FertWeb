import { app } from './ConexaoBd.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

// Function to add temperature to the Realtime Database
export function adicionarTemperatura(temperatura) {
    const database = getDatabase(app);
    const timestamp = new Date().toISOString();
    const data = {
        valor: temperatura,
        timestamp: timestamp
    };
    set(ref(database, 'temperaturas/' + timestamp), data);
    return timestamp;
}
