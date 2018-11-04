use rand::{thread_rng, Rng};

use super::{cell::Cell, grid::Grid, map_cells};

pub fn binary_tree_step(target: &mut Grid, cell: &mut Cell) {
  let mut rng = thread_rng();
  let mut neighbors = Vec::new();
  match cell.north {
    Some(id) => neighbors.push(id),
    None => {}
  };
  match cell.east {
    Some(id) => neighbors.push(id),
    None => {}
  };
  let lucky_passage = rng.choose(&neighbors);
  match lucky_passage {
    Some(id) => cell.link(target.cell_by_id_mut(*id).unwrap(), true),
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
