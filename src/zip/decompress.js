import { createReadStream, createWriteStream } from "fs";
import { createGzip, createUnzip } from "zlib";
import { pipeline } from "stream/promises";
import { unlink } from "fs/promises";

const decompress = async () => {
    const readable = createReadStream('./src/zip/files/archive.gz')
    const writable = createWriteStream('./src/zip/files/fileToCompress.txt')
    const unzip = createUnzip()

    pipeline(readable, unzip, writable).then(() => unlink('./src/zip/files/archive.gz'))
};

await decompress();
