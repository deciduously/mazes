import Cell from './cell';
import Grid from './grid';

export const sidewinder = (grid: Grid): void => {
    grid.each_row((row) => {
        let run: Cell[] = [];

        row.forEach((cell) => {
            run.push(cell);

            const at_eastern_boundary = cell.east === null;
            const at_northern_boundary = cell.north === null;

            const should_close_out =
                at_eastern_boundary ||
                (!at_northern_boundary && Math.floor(Math.random() * 2) === 0);
            
            if (should_close_out) {
                const member = run[Math.floor(Math.random() * run.length)]
                if (member.north) { member.link(member.north) }
                run = [];
            } else {
                cell.link(cell.east!);
            }
        })
    })
}