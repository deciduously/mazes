import Cell from './cell';

export default class Distances {
  private cells: Map<Cell, number>;
  constructor(private readonly root: Cell) {
    this.cells = new Map();
    this.set(root, 0);
  }

  public get(c: Cell): number | undefined {
    return this.cells.get(c);
  }

  public set(c: Cell, d: number) {
    this.cells.set(c, d);
  }

  public all_cells(): Cell[] {
    return Array.from(this.cells.keys());
  }

  public pathTo(goal: Cell): Distances {
    let current = goal;

    const breadcrumbs = new Distances(this.root);
    breadcrumbs.set(current, this.get(current)!);

    while (current !== this.root) {
      for (const neighbor of current.getLinks()) {
        if (this.get(neighbor)! < this.get(current)!) {
          breadcrumbs.set(neighbor, this.cells.get(neighbor)!);
          current = neighbor;
          break;
        }
      }
    }
    return breadcrumbs;
  }
}
