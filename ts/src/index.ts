//import  { binaryTree } from './binary_tree';
import { sidewinder } from './sidewinder';
import Grid from './grid';

const main = () => {
    const app = document.querySelector('#app')!;
    const grid = new Grid(8, 8);
    sidewinder(grid);
    console.log(grid.toString());
}

main();