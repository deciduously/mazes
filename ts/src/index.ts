// import  { binaryTree } from './binary_tree';
import { sidewinder } from './sidewinder';
import grid from './grid';

const main = () => {
  const app = document.querySelector('#app')!;
  app.appendChild(document.createElement('canvas'));

  // set up grid parameters
  const gridW = 50;
  const gridH = 50;
  const cellSize = 10;

  // Build maze
  const maze: grid = new grid(document.querySelector('canvas')!, gridW, gridH, cellSize);
  sidewinder(maze);
  maze.draw();
};

main();