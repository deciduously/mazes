export default class Cell {
    public readonly row: number;
    public readonly column: number;
    public north: Cell | null;
    public south: Cell | null;
    public west: Cell | null;
    public east: Cell | null;
    private links: Map<Cell, boolean>;
    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
        this.north = null;
        this.south = null;
        this.east = null;
        this.west = null;
        this.links = new Map();
    }

    public contents = () => ' ';

    public link(cell: Cell, bidi = true) {
        this.links.set(cell, true);
        if (bidi) {
            cell.link(this, false);
        }
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
}