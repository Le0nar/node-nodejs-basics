import fsPromises from "node:fs/promises";
import { exists } from "./exist.utils.js";

const rename = async () => {
    const path = './src/fs/files'
    const oldFilePath = `${path}/wrongFilename.txt`
    const newFilePath = `${path}/properFilename.md`
    const isExistOldFile = await exists(oldFilePath)
    const isExistNewFile = await exists(newFilePath)

    if (!isExistOldFile || isExistNewFile) {
        throw new Error('FS operation failed')
    }

    fsPromises.rename(oldFilePath, newFilePath)
};

await rename();