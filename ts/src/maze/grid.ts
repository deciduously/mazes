import Cell from './cell';

// To approximate img.line() from chunky_png in Ruby
const drawLine = (
  x1: number, y1: number, x2: number, y2: number, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);

  ctx.strokeStyle = '#000';
  ctx.stroke();
};

export default class Grid {
  public readonly canvasW: number;
  public readonly canvasH: number;
  private grid: Cell[][];
  constructor(
    private readonly rows: number,
    private readonly columns: number,
    public readonly cellSize: number) {
    // set up canvas
    this.canvasW = (columns * cellSize) + 1;
    this.canvasH = (rows * cellSize) + 1;

    // set up grid
    this.grid = [];
    this.prepareGrid();
    this.configureGrid();
  }

  public draw = (canvas: HTMLCanvasElement) => {
    // resize canvas
    canvas.width = this.canvasW;
    canvas.height = this.canvasH;

    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.eachCell((cell) => {
      // get boundaries
      const x1 = cell.column * this.cellSize;
      const y1 = cell.row * this.cellSize;
      const x2 = (cell.column + 1) * this.cellSize;
      const y2 = (cell.row + 1) * this.cellSize;

      // always draw north wall if we're in the top row
      if (!cell.north) { drawLine(x1, y1, x2, y1, ctx); }

      // always draw west wall if we're in the west row
      if (!cell.west) { drawLine(x1, y1, x1, y2, ctx); }

      // draw east wall unless linked
      if (!cell.isLinked(cell.east)) { drawLine(x2, y1, x2, y2, ctx); }

      // draw south wall unless linked
      if (!cell.isLinked(cell.south)) { drawLine(x1, y2, x2, y2, ctx); }
    });
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
