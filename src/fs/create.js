import { appendFile } from 'node:fs/promises';
import { exists } from './exist.utils.js';

const create = async () => {
    const path = './src/fs/files/fresh.txt'
    const isFileExist = await exists(path)

    if (isFileExist) {
        throw new Error('FS operation failed')
    }

    const successMessage = 'I am fresh and young';
    appendFile(path, successMessage, (err) => {
        if (err) throw err;
    })
};

await create();
