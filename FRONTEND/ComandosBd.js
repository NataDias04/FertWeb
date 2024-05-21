import { app } from './ConexaoBd.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

// Function to add temperature to the Realtime Database
export function adicionarTemperatura(temperatura) {
    const database = getDatabase(app);
    const timestamp = new Date().toISOString();
    // Substitui ":" por "-" para garantir um caminho válido no Firebase
    timestamp = timestamp.replace(/:/g, '-');
    
    const data = {
        valor: temperatura,
        timestamp: timestamp
    };
    set(ref(database, 'temperaturas/' + timestamp), data);
    return timestamp;
}
