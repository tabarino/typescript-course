function Entity(tableName: string) {
    return (target: Function) => {
        registerOrmModel(target);
    }
}

function Column(columnName: string) {
    return (target: any, propertyKey: string) => {
        console.log(propertyKey);
    }
}

function registerOrmModel(model: Function) {
    console.log('Registering ORM Models', model);
}

@Entity('todos')
class Todo {
    @Column('name')
    name: string;

    constructor(public description: string, public done = false) {
        this.name = 'Ivan';
    }
}
