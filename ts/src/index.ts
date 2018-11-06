const world = 'world';

export function hello(word: string = world): string {
    return `Hello, ${world}! `;
}

const main = () => {
    const app = document.querySelector('#app');
    app.appendChild(document.createTextNode(hello()));
    app.appendChild(document.createElement("canvas"));
}

main();