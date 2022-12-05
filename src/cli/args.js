const parseArgs = () => {
    process.argv.forEach((argName, index, array) => {
        if (argName.startsWith('--')) {
            console.log(`${argName} is ${array[index + 1]}`)
        }
    })
};

parseArgs();