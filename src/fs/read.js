import { readFile } from "node:fs/promises";
import { exists } from "./exist.utils.js";

const read = async () => {
    const path = './src/fs/files/fileToRead.txt'
    const isFileExist = await exists(path)

    if (!isFileExist) {
        throw new Error('FS operation failed')
    }

    const data = await readFile(path, { encoding: 'utf8' })
    console.log(data)
};

await read();