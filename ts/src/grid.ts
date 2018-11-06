import Cell from './cell';

export default class Grid {
    private readonly rows: number;
    private readonly columns: number;
    private grid: Array<Array<Cell>>;
    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.grid = [];
        this.prepare_grid();
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
}