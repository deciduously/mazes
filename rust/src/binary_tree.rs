use rand::{thread_rng, Rng};

use super::{
    cell::Cell,
    grid::{map_cells, Grid},
};

pub fn binary_tree_step(target: &mut Grid, cell: &mut Cell) {
    let mut rng = thread_rng();
    let mut neighbors = Vec::new();

    let north = cell.north.clone().into_inner();
    if let Some(id) = north {
        neighbors.push(id)
    }

    let east = cell.east.clone().into_inner();
    if let Some(id) = east {
        neighbors.push(id)
    }

    let lucky_passage = rng.choose(&neighbors);
    if let Some(id) = lucky_passage {
        target.link(cell.id, *id)
    }
}

pub fn binary_tree(mut grid: Grid) -> Grid {
    let mut ret = Grid::new(grid.rows, grid.columns);
    map_cells(&mut grid, |cell: &mut Cell| {
        binary_tree_step(&mut ret, cell)
    });
    ret
}
