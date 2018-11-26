import Cell from './cell';

export default class Distances {
    private cells: Map<Cell, number>;
    constructor(root: Cell) {
        this.cells = new Map();
        this.cells.set(root, 0);
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
}
