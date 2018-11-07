//import  { binaryTree } from './binary_tree';
import { sidewinder } from './sidewinder';
import Grid from './grid';

const main = () => {
    const app = document.querySelector('#app')!;
    app.appendChild(document.createElement('canvas'))

    // set up grid parameters
    const gridW = 8;
    const gridH = 8;
    const cell_size = 10;

    // Build maze
    const grid = new Grid(document.querySelector('canvas')!, gridW, gridH, cell_size);
    sidewinder(grid);
    console.log(grid.toString());
}

main();