import grid from './grid';

export const binaryTree = (grid: grid): void => {
  grid.eachCell((cell) => {
    const neighbors = [];
    if (cell.north !== null) { neighbors.push(cell.north); }
    if (cell.east !== null) { neighbors.push(cell.east); }

    if (neighbors.length > 0) {
      const luckyNeighbor = Math.floor(Math.random() * neighbors.length);
      const neighbor = neighbors[luckyNeighbor];
      cell.link(neighbor);
    }
  });
};