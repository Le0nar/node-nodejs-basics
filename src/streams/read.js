import { createReadStream } from "fs";

const read = async () => {
    const readable = createReadStream('./src/streams/files/fileToRead.txt')
    readable.pipe(process.stdout)
};

await read();