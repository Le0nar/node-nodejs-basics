import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const calculateHash = async () => {
    const path = './src/hash/files/fileToCalculateHashFor.txt'

    const fileConent = await readFile(path, { encoding: 'utf8' })
    const hash = createHash('sha256');
    hash.update(fileConent)

    const hex = hash.digest('hex');
    console.log(hex)
};

await calculateHash();