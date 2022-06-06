var scope = 'im global';

const functionScope = () => {
    var scope = 'im just a local';
    const func = () => {
        return scope
    }
    console.log(func());
}
functionScope();
console.log(scope);