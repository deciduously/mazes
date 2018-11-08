import { binaryTree } from './binary_tree';
import { sidewinder } from './sidewinder';
import grid from './grid';

// makes a new maze and draws it to a the canvas
const drawMaze = (algo: string) => {
  // set up grid parameters
  const gridW = 100;
  const gridH = 100;
  const cellSize = 10;

  // Build maze
  const maze: grid = new grid(document.querySelector('canvas')!, gridW, gridH, cellSize);
  switch (algo) {
    case 'binarytree':
      binaryTree(maze);
    case 'sidewinder':
      sidewinder(maze);
      break;
    default:
      console.log(`Unrecongized: ${algo} - rending binary tree`);
      binaryTree(maze);
  }
  maze.draw();
};

// set up controls
const btButton = document.querySelector('#binarytree')!;
btButton.addEventListener('click', _ => drawMaze('binarytree'));
const sidewinderButton = document.querySelector('#sidewinder')!;
sidewinderButton.addEventListener('click', _ => drawMaze('sidewinder'));

const main = () => {
  // create canvas
  const app = document.querySelector('#app')!;
  app.appendChild(document.createElement('canvas'));
};

main();