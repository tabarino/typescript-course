enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const loggingLevel = LoggingLevel.DEBUG;

function LogMethod(level: LoggingLevel): Function {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalFunction: Function = descriptor.value;

        // We cannot use the arrow function in this case
        // The arrow function doesn't preserve the context , so we have to use the normal function here
        // descriptor.value = (...args: any[]) => {
        descriptor.value = function (...args: any[]) {
            if (level <= loggingLevel) {
                console.log('Log Method - Function Called:', propertyKey, 'args:', args);
            }
            originalFunction.apply(this, args);
        }
    }
}

class Database {
    name = 'CTCDB';

    @LogMethod(LoggingLevel.DEBUG)
    saveData(data: any) {
        console.log('Saving Data in the database:', this.name, 'args:', data);
    }
}

const db = new Database();
db.saveData({ message: 'Hello World' });
