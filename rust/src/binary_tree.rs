use rand::{thread_rng, Rng};

use super::grid::Grid;

pub fn binary_tree(grid: &mut Grid) {
  let mut rng = thread_rng();
  let mut pairs = Vec::new();
  for row in &grid.grid {
    for cell in row {
      let mut neighbors = Vec::new();
      match cell.north {
        Some(id) => neighbors.push(id),
        None => {}
      };
      match cell.east {
        Some(id) => neighbors.push(id),
        None => {}
      };
      let lucky_passage = rng.choose(&neighbors).unwrap_or(&-1);
      pairs.push((cell.id, *lucky_passage));
    }
  }
  for pair in &pairs {
    if pair.1 >= 0 {
      grid.link(pair.0, pair.1, true);
    }
  }
}
