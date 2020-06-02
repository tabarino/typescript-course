function createMessage(name: string): string {
    if (name) {
        return `Hello, my name is ${ name }`;
    }

    return '';
}

console.log(createMessage('Ivan'));
