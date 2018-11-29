import Distances from './distances';

export default class Cell {
  public north: Cell | null;
  public south: Cell | null;
  public west: Cell | null;
  public east: Cell | null;
  private links: Map<Cell, boolean>;
  constructor(public readonly row: number, public readonly column: number) {
    this.north = null;
    this.south = null;
    this.east = null;
    this.west = null;
    this.links = new Map();
  }

  public link(cell: Cell, bidi = true) {
    this.links.set(cell, true);
    if (bidi) {
      cell.link(this, false);
    }
  }

  public getLinks(): Cell[] {
    return Array.from(this.links.keys());
  }

  public isLinked = (cell: Cell | null): boolean => {
    if (cell == null) { return false; }
    return this.links.get(cell) || false;
  }

  public unlink(cell: Cell, bidi = true) {
    this.links.delete(cell);
    if (bidi) {
      cell.unlink(this, false);
    }
  }

  public distances(): Distances {
    const distances = new Distances(this);
    let frontier: Cell[] = [this];

    while (frontier.length > 0) {
      const newFrontier: Cell[] = [];

      for (const c of frontier) {
        for (const linked of c.getLinks()) {
          if (distances.get(linked) !== undefined) {
            continue;
          } else {
            distances.set(linked, distances.get(c)! + 1);
            newFrontier.push(linked);
          }
        }
      }
      frontier = newFrontier;
    }
    return distances;
  }
}
