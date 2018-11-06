export default class Cell {
    private readonly row: number;
    private readonly column: number;
    private readonly north: Cell | null;
    private readonly south: Cell | null;
    private readonly west: Cell | null;
    private readonly east: Cell | null;
    private links: Array<Cell>; // instead of a dict
    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
        this.north = null;
        this.south = null;
        this.east = null;
        this.west = null;
        this.links = [];
    }

    // Without a dictionary, I'm not sure I can avoid enumerating each link
    // However, it's never gonna be more than 4 so I don't think I care
    public link(cell: Cell, bidi = true) {
        let linked: boolean = false;
        for (const l of this.links) {
            if (l == cell) {
                linked = true;
                break;
            }
        }
        if (!linked) {
            this.links.push(this);
            if (bidi) {
                cell.link(this, false);
            }
        }
    }

    public unlink(cell: Cell, bidi = true) {
        for (var idx = 0; idx < this.links.length; idx++) {
            if (this.links[idx] == cell) {
                this.links.splice(idx, 1);
                if (bidi) {
                    cell.unlink(this);
                }
            }
        }
    }
}