use rand::{thread_rng, Rng};

use super::{
    cell::Cell,
    grid::{map_cells, Grid},
};

pub fn binary_tree_step(target: &mut Grid, cell: &Cell) {
    let mut rng = thread_rng();
    let mut neighbors = Vec::new();

    if let Some(id) = cell.north {
        neighbors.push(id)
    }

    if let Some(id) = cell.east {
        neighbors.push(id)
    }

    if let Some(id) = rng.choose(&neighbors) {
        target.link(cell.id, *id)
    }
}

pub fn binary_tree(mut grid: Grid) -> Grid {
    let mut ret = Grid::new(grid.rows, grid.columns);
    map_cells(&mut grid, |cell: &Cell| binary_tree_step(&mut ret, cell));
    ret
}
