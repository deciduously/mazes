
import Cell from './cell';
import Grid from './grid';

const sample = (list: any[]): any | null => {
  if (list.length === 0) { return null; }
  return list[Math.floor((Math.random() * list.length))];
};

export const binaryTree = (grid: Grid): void => {
  grid.eachCell((cell) => {
    const neighbors = [];
    if (cell.north !== null) { neighbors.push(cell.north); }
    if (cell.east !== null) { neighbors.push(cell.east); }

    const neighbor = sample(neighbors);
    if (neighbor !== null) {
      cell.link(neighbor);
    }
  });
};

export const sidewinder = (grid: Grid): void => {
  grid.eachRow((row) => {
    let run: Cell[] = [];

    row.forEach((cell) => {
      run.push(cell);

      const atEasternBoundary = cell.east === null;
      const atNorthernBoundary = cell.north === null;

      const shouldCloseOut =
        atEasternBoundary ||
        (!atNorthernBoundary && Math.floor(Math.random() * 2) === 0);

      if (shouldCloseOut) {
        const member = sample(run);
        if (member.north) { member.link(member.north); }
        run = [];
      } else {
        cell.link(cell.east!);
      }
    });
  });
};
