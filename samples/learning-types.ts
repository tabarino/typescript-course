type MessageCreator = (name: string) => string;

function createHelloMessage(name: string, extra?: number): string {
    return `Hello, my name is ${ name }`;
}

const creator: MessageCreator = createHelloMessage;

const message = creator('Michael');

console.log(message);
