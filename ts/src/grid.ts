import Cell from './cell';

export default class Grid {
    private readonly context: CanvasRenderingContext2D;
    private readonly canvasW: number;
    private readonly canvasH: number;
    private grid: Cell[][];
    constructor(private readonly canvas: HTMLCanvasElement,
                private readonly rows: number,
                private readonly columns: number,
                private readonly cell_size: number) {
        // set up canvas
        this.context = this.canvas.getContext('2d')!;
        this.canvasW = (rows * cell_size) + 1;
        this.canvasH = (columns * cell_size) + 1;
        this.canvas.width = this.canvasW;
        this.canvas.height = this.canvasH;

        // set up grid
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

    public draw = () => {
        this.context.clearRect(0, 0, this.canvasW, this.canvasH);
        const wall_color = '#000';

        this.each_cell((cell) => {
            const x1 = cell.column * this.cell_size;
            const x2 = cell.row & this.cell_size;
        })
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