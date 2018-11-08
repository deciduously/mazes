import { binaryTree, sidewinder } from './algo';
import grid from './grid';

// makes a new maze and draws it to a the canvas
const drawMaze = (algo: string) => {
  // set up grid parameters
  const gridW = 5;
  const gridH = 5;
  const cellSize = 30;

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

const form = document.querySelector('form')!;

form.onsubmit = () => {
  const data = new FormData(form);
  const algo = data.get('algo') as string;
  drawMaze(algo);
  return false; // prevent reload
};

const main = () => {
  // create canvas
  const app = document.querySelector('#app')!;
  app.appendChild(document.createElement('canvas'));
};

main();