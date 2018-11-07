import Cell from './cell';

export default class Grid {
    private readonly rows: number;
    private readonly columns: number;
    private grid: Cell[][];
    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.grid = [];
        this.prepare_grid();
        this.configure_grid();
    }

    private configure_grid = () => {
        this.each_cell((cell) => {
            const row = cell.row;
            const col = cell.column;

            cell.north = this.get_cell(row - 1, col);
            cell.south = this.get_cell(row + 1, col);
            cell.west = this.get_cell(row, col - 1);
            cell.east = this.get_cell(row, col + 1);
        });
    }

    public each_cell = (f: (cell: Cell) => void) => {
        this.each_row((row) => row.forEach((cell) => f(cell)));
    }

    public each_row = (f: (row: Cell[]) => void) => {
        this.grid.forEach((row) => f(row));
    }

    private get_cell = (row: number, col: number): Cell | null => {
        if (row < 0 || row >= this.rows) { return null; }
        if (col < 0 || col >= this.columns) { return null; }
        return this.grid[row][col];
    }

    private prepare_grid = () => {
        for (var i = 0; i < this.rows; i++) {
            var row = [];
            for (var j = 0; j < this.columns; j++) {
                row.push(new Cell(i, j));
            }
            this.grid.push(row);
        }
    }

    public toString = (): string => {
        let output = '+';
        for (var i = 0; i < this.columns; i++) {
            output += '---+'
        }
        output += '\n';
        this.grid.forEach((row) => {
            let top = '|';
            let bottom = '+';

            row.forEach((cell) => {
                const body = ' ' + cell.contents() + ' ';
                const east_boundary = (cell.isLinked(cell.east) ? ' ' : '|');
                top += body;
                top += east_boundary;

                const south_boundary = (cell.isLinked(cell.south) ? '   ' : '---');
                const corner = '+';
                bottom += south_boundary;
                bottom += corner;
            });

            output += top;
            output += '\n';
            output += bottom;
            output += '\n';
        });
        return output;
    }
}