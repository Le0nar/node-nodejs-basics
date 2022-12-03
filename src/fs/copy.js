import { mkdir, readdir, copyFile } from "node:fs/promises";
import { exists } from "./exist.utils.js";

const copy = async () => {
    const filesPath = './src/fs/files'
    const isExistFiles = await exists(filesPath)

    const copyFilesPath = './src/fs/files_copy'
    const isExistCopyFiles = await exists(copyFilesPath)

    if (!isExistFiles || isExistCopyFiles) {
        throw new Error('FS operation failed')
    }

    await mkdir(copyFilesPath)

    const fileList = await readdir(filesPath)

    fileList.forEach((fileName) => {
        copyFile(`${filesPath}/${fileName}`, `${copyFilesPath}/${fileName}`);
    })
};

copy();