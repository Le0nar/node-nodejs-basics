import { readdir } from "node:fs/promises";
import { exists } from "./exist.utils.js";

const list = async () => {
    const filesPath = './src/fs/files'
    const isExistFiles = await exists(filesPath)

    if (!isExistFiles) {
        throw new Error('FS operation failed')
    }

    const fileList = await readdir(filesPath)
    console.log(fileList)
};

await list();