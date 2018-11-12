import Cell from './cell';

export default class Grid {
  public readonly canvasW: number;
  public readonly canvasH: number;
  private grid: Cell[][];
  constructor(
    private readonly rows: number,
    private readonly columns: number,
    public readonly cellSize: number) {
    // set up canvas
    this.canvasW = (rows * cellSize) + 1;
    this.canvasH = (columns * cellSize) + 1;

    // set up grid
    this.grid = [];
    this.prepareGrid();
    this.configureGrid();
  }

  public eachCell = (f: (cell: Cell) => void) => {
    this.eachRow((row) => row.forEach((cell) => {
      return f(cell);
    }));
  }

  public eachRow = (f: (row: Cell[]) => void) => {
    this.grid.forEach((row) => {
      return f(row);
    });
  }

  public toString = (): string => {
    let output = '+';
    for (let i = 0; i < this.columns; i += 1) {
      output += '---+';
    }
    output += '\n';
    this.grid.forEach((row) => {
      let top = '|';
      let bottom = '+';

      row.forEach((cell) => {
        const body = ` ${cell.contents()} `;
        const eastBoundary = (cell.isLinked(cell.east) ? ' ' : '|');
        top += body;
        top += eastBoundary;

        const southBoundary = (cell.isLinked(cell.south) ? '   ' : '---');
        const corner = '+';
        bottom += southBoundary;
        bottom += corner;
      });

      output += top;
      output += '\n';
      output += bottom;
      output += '\n';
    });
    return output;
  }

  private configureGrid = () => {
    this.eachCell((cell) => {
      const row = cell.row;
      const col = cell.column;

      cell.north = this.getCell(row - 1, col);
      cell.south = this.getCell(row + 1, col);
      cell.west = this.getCell(row, col - 1);
      cell.east = this.getCell(row, col + 1);
    });
  }

  private getCell = (row: number, col: number): Cell | null => {
    if (row < 0 || row >= this.rows) { return null; }
    if (col < 0 || col >= this.columns) { return null; }
    return this.grid[row][col];
  }

  private prepareGrid = () => {
    for (let i = 0; i < this.rows; i += 1) {
      const row = [];
      for (let j = 0; j < this.columns; j += 1) {
        row.push(new Cell(i, j));
      }
      this.grid.push(row);
    }
  }
}
