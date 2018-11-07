import Grid from './grid';

export const binaryTree = (grid: Grid): Grid => {
    grid.each_cell((cell) => {
        let neighbors = [];
        if (cell.north !== null) {
            neighbors.push(cell.north)
        }
        if (cell.east !== null) {
            neighbors.push(cell.east)
        }

        const neighbor = neighbors[neighbors.length * Math.random() | 0];

        if (neighbor !== undefined) {
            cell.link(neighbor)
        }
    });

    return grid;
}