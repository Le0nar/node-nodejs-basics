import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker, } from 'node:worker_threads'
import { cpus } from "node:os";

const START_NUMBER = 10

const adaptData = (arr) => {
    const sortedArr = arr.sort((a, b) => a.data.index - b.data.index)
    const changedArr = sortedArr.map(({ status, data }) => {
        return {
            status,
            data: data.payload
        }
    })
    return changedArr
}

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    let isCompleted = false
    const result = []

    cpus().forEach((_core, index, array) => {
        const worker = new Worker(
            `${__dirname}/worker.js`,
            {
                workerData: { payload: START_NUMBER + index, index }
            }
        )

        worker.on('message', (msg) => {
            result.push({ status: 'resolved', data: msg })
        })

        worker.on('error', () => {
            result.push({ status: 'error', data: null })
        })

        worker.on('exit', () => {
            if (isCompleted) return

            if (result.length === array.length) {
                console.log(adaptData(result))
                isCompleted = true
            }
        });

    })


};

await performCalculations();