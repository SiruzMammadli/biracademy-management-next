'use server'
import fs from 'fs';
import path from 'path';

export async function logToFile(message: any) {
    const logPath = path.join(process.cwd(), 'logs', 'error-log.txt');
    const logEntry = `[${new Date().toISOString()}]: ${JSON.stringify(message)}\n`;

    try {
        fs.mkdirSync(path.dirname(logPath), { recursive: true });
        fs.appendFileSync(logPath, logEntry, 'utf8');
    }
    catch (e) {
        console.error('Error occurred while logging:', e);
    }
}