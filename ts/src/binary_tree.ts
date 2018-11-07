import Grid from './grid';

export const binaryTree = (grid: Grid): void => {
    grid.each_cell((cell) => {
        let neighbors = [];
        if (cell.north) {
            neighbors.push(cell.north)
        }
        if (cell.east) {
            neighbors.push(cell.east)
        }

        const neighbor = neighbors[neighbors.length * Math.random() | 0];

        if (neighbor !== undefined) {
            cell.link(neighbor)
        }
    });
}