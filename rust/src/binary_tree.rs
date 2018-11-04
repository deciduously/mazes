use rand::{thread_rng, Rng};

use super::grid::Grid;

pub fn binary_tree(grid: &mut Grid) {
  let mut rng = thread_rng();
  let mut pairs = Vec::new();
  for row in &grid.grid {
    for cell in row {
      let mut neighbors = Vec::new();
      match cell.north {
        Some(_) => neighbors.push(cell.id),
        None => {}
      };
      match cell.east {
        Some(_) => neighbors.push(cell.id),
        None => {}
      };

      let neighbors_len = neighbors.len();
      let high = if neighbors_len > 0 { neighbors_len } else { 1 };
      let index = rng.gen_range(0, high);

      if neighbors_len > 0 {
        pairs.push((cell.id, grid.cell_by_id(neighbors[index]).unwrap().id));
      }
    }
  }
  println!("{:?}", pairs);
  for (origin, target) in &pairs {
    grid.link(*origin, *target, true);
  }
}
