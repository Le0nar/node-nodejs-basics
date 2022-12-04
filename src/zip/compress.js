import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { unlink } from "fs/promises";

const compress = async () => {
    const readable = createReadStream('./src/zip/files/fileToCompress.txt')
    const writable = createWriteStream('./src/zip/files/archive.gz')
    const gzip = createGzip()

    pipeline(readable, gzip, writable).then(() => unlink('./src/zip/files/fileToCompress.txt'))
};

await compress();