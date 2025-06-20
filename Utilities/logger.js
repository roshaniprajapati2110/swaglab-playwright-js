export class Log{
    static step(component,message)
    { 
        console.log(`STEP [${component}]: ${message}`); 
    }

    static info(message)
    {
        console.log(`INFO: ${message}`); 
    }

    static error(message) 
    {
    console.error(`ERROR: ${message}`);
    }
}