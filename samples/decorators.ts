enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const loggingLevel = LoggingLevel.DEBUG;

function LogMethod(level: LoggingLevel): Function {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log('target: ', target);
        console.log('propertyKey: ', propertyKey);
        console.log('descriptor: ', descriptor);
    }
}

class Database {
    name = 'CTCDB';

    @LogMethod(LoggingLevel.DEBUG)
    saveData(data: any) {
        console.log('Saving Data in the database: ', this.name);
    }
}

const db = new Database();
db.saveData({ message: 'Hello World' });
