const parseEnv = () => {
    const keys = Object.keys(process.env)
    const filteredKeys = keys.filter((keyName) => keyName.startsWith('RSS_'))
    filteredKeys.forEach((keyName) => console.log(`${keyName}=${process.env[keyName]}`))
};

parseEnv();