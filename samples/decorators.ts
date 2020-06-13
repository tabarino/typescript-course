enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const loggingLevel = LoggingLevel.DEBUG;

class Database {
    name = 'CTCDB';

    @LogMethod(LoggingLevel.DEBUG)
    saveData(data: any) {
        console.log('Saving Data in the database: ', this.name);
    }
}

const db = new Database();
db.saveData({ message: 'Hello World' });
