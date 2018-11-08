import grid from './grid';

export const binaryTree = (grid: grid): void => {
  grid.eachCell((cell) => {
    const neighbors = [];
    if (cell.north) {
      neighbors.push(cell.north);
    }
    if (cell.east) {
      neighbors.push(cell.east);
    }

    const neighbor = neighbors[neighbors.length * Math.random() | 0];

    if (neighbor !== undefined) {
      cell.link(neighbor);
    }
  });
};