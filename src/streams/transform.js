import { Transform } from "stream";
import { pipeline } from "stream/promises";

class TransformStream extends Transform {
    constructor(options = {}) {
        super(options)
    }

    _transform(chunk, enc, cb) {
        const stringifiedChunk = chunk.toString()
        const reversedChunk = stringifiedChunk.split('').reverse().join('')

        this.push(reversedChunk)
        this.push('\n')

        cb()
    }
}

const transform = async () => {
    const readable = process.stdin
    const writable = process.stdout

    const transform = new TransformStream()

    pipeline(readable, transform, writable)
};

await transform();