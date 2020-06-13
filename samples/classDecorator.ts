function Entity(tableName: string) {
    return (target: Function) => {
        registerOrmModel(target);
    }
}

function registerOrmModel(model: Function) {
    console.log('Registering ORM Models', model);
}

@Entity('todos')
class Todo {
    constructor(public description: string, public done = false) {
    }
}
