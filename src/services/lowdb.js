import { Low, JSONFile } from 'lowdb';
import { app } from 'electron';

const __dirname = app.getPath('home');

const file = `${__dirname}db.json`;
const adapter = new JSONFile(file);

export const db = new Low(adapter);
