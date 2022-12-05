import { spawn, } from "node:child_process";
import { argv, stdin } from 'node:process';

const spawnChildProcess = async (args) => {
    const path = 'src/cp/files/script.js';

    const child = spawn(`node`, [path, ...args], {
        stdio: [stdin],
    });

    child.stdout.on('data', (data) => {
        console.log(`Received from child process:\n${data}`);
    });

    child.on('spawn', () => {
        console.log('\nSpawn child process!\n');
    });

};

const args = argv.slice(2);

spawnChildProcess(args);