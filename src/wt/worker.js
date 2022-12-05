import { workerData, parentPort } from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const calculatedData = { payload: nthFibonacci(workerData.payload), index: workerData.index }
    parentPort.postMessage(calculatedData)
};

sendResult();