use rand::{thread_rng, Rng};

use super::{
  cell::Cell,
  grid::{map_cells, Grid},
};

pub fn binary_tree_step(target: &mut Grid, cell: &mut Cell) {
  let mut rng = thread_rng();
  let mut neighbors = Vec::new();
  let north = cell.north.clone().into_inner();
  match north {
    Some(id) => neighbors.push(id),
    None => {}
  };
  let east = cell.east.clone().into_inner();
  match east {
    Some(id) => neighbors.push(id),
    None => {}
  };
  let lucky_passage = rng.choose(&neighbors);
  match lucky_passage {
    Some(id) => target.link(cell.id, *id),
    None => {}
  }
}

pub fn binary_tree(mut grid: Grid) -> Grid {
  let mut ret = Grid::new(grid.rows, grid.columns);
  map_cells(&mut grid, |cell: &mut Cell| {
    binary_tree_step(&mut ret, cell)
  });
  ret
}
