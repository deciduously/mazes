import  { binaryTree } from './binary_tree';
import Grid from './grid';

const main = () => {
    const app = document.querySelector('#app')!;
    const grid = new Grid(4, 4);
    let bt = binaryTree(grid);
    console.log(bt.toString());
}

main();