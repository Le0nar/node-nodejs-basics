import { unlink } from 'node:fs/promises';
import { exists } from "./exist.utils.js";

const remove = async () => {
    const path = './src/fs/files/fileToRemove.txt'
    const isFileExist = await exists(path)

    if (!isFileExist) {
        throw new Error('FS operation failed')
    }
    unlink(path)
};

await remove();