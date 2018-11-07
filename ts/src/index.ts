import Grid from './grid';

const main = () => {
    const app = document.querySelector('#app');
    const grid = new Grid(10, 10);
    console.log(grid.toString());
}

main();