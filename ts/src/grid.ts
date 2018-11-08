import cell from './cell';

// To approximate img.line() from chunky_png in Ruby
const drawLine = (
  x1: number, y1: number, x2: number, y2: number, color: string, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);

  ctx.strokeStyle = color;
  ctx.stroke();
};

export default class Grid {
  private readonly context: CanvasRenderingContext2D;
  private readonly canvasW: number;
  private readonly canvasH: number;
  private grid: cell[][];
  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly rows: number,
    private readonly columns: number,
    private readonly cellSize: number) {
    // set up canvas
    this.context = this.canvas.getContext('2d')!;
    this.canvasW = (rows * cellSize) + 1;
    this.canvasH = (columns * cellSize) + 1;
    this.canvas.width = this.canvasW;
    this.canvas.height = this.canvasH;

    // set up grid
    this.grid = [];
    this.prepareGrid();
    this.configureGrid();
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

  public draw = (wallColor = '#000') => {
    this.context.clearRect(0, 0, this.canvasW, this.canvasH);

    this.eachCell((cell) => {
      // get boundaries
      const x1 = cell.column * this.cellSize;
      const y1 = cell.row * this.cellSize;
      const x2 = (cell.column + 1) * this.cellSize;
      const y2 = (cell.row + 1) * this.cellSize;

      // always draw north wall if we're in the top row
      if (!cell.north) { drawLine(x1, y1, x2, y1, wallColor, this.context); }

      // always draw west wall if we're in the west row
      if (!cell.west) { drawLine(x1, y1, x1, y2, wallColor, this.context); }

      // draw east wall unless linked
      if (!cell.isLinked(cell.east)) { drawLine(x2, y1, x2, y2, wallColor, this.context); }

      // draw south wall unless linked
      if (!cell.isLinked(cell.south)) { drawLine(x1, y2, x2, y2, wallColor, this.context); }
    });
  }

  public eachCell = (f: (cell: cell) => void) => {
    this.eachRow(row => row.forEach(cell => f(cell)));
  }

  public eachRow = (f: (row: cell[]) => void) => {
    this.grid.forEach(row => f(row));
  }

  private getCell = (row: number, col: number): cell | null => {
    if (row < 0 || row >= this.rows) { return null; }
    if (col < 0 || col >= this.columns) { return null; }
    return this.grid[row][col];
  }

  private prepareGrid = () => {
    for (let i = 0; i < this.rows; i += 1) {
      const row = [];
      for (let j = 0; j < this.columns; j += 1) {
        row.push(new cell(i, j));
      }
      this.grid.push(row);
    }
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
}