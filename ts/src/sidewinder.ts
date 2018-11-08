import cell from './cell';
import grid from './grid';

export const sidewinder = (grid: grid): void => {
  grid.eachRow((row) => {
    let run: cell[] = [];

    row.forEach((cell) => {
      run.push(cell);

      const atEasternBoundary = cell.east === null;
      const atNorthernBoundary = cell.north === null;

      const shouldCloseOut =
        atEasternBoundary ||
        (!atNorthernBoundary && Math.floor(Math.random() * 2) === 0);

      if (shouldCloseOut) {
        const member = run[Math.floor(Math.random() * run.length)];
        if (member.north) { member.link(member.north); }
        run = [];
      } else {
        cell.link(cell.east!);
      }
    });
  });
};