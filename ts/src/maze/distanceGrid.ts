import Cell from './cell';
import Distances from './distances';
import Grid from './grid';

export default class DistanceGrid extends Grid {
  public distances: Distances | null;
  constructor(public readonly rows: number, public readonly columns: number, public readonly cellSize: number) {
    super(rows, columns, cellSize);
    this.distances = null;
  }
  public contentsOf(cell: Cell): string {
    if (this.distances !== null && this.distances.get(cell) !== undefined) {
      return this.distances.get(cell)!.toString(36);
    } else {
      // can't use super()?
      return ' ';
    }
  }
}
