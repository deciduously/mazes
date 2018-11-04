use std::fmt;

use super::cell::Cell;

#[derive(Clone, Debug)]
pub struct Grid {
  pub rows: i32,
  pub columns: i32,
  pub grid: Vec<Vec<Cell>>,
}

impl Grid {
  pub fn new(rows: i32, columns: i32) -> Self {
    let ret = Self {
      rows,
      columns,
      grid: prepare_grid(rows, columns),
    };
    configure_grid(&ret)
  }

  pub fn cell_by_id<'a>(&'a self, id: i32) -> Option<&'a Cell> {
    for row in self.grid.iter() {
      for cell in row.iter() {
        if cell.id == id {
          return Some(&*cell);
        }
      }
    }
    None
  }

  pub fn cell_by_id_mut<'a>(&'a mut self, id: i32) -> Option<&'a mut Cell> {
    for row in self.grid.iter_mut() {
      for cell in row.iter_mut() {
        if cell.id == id {
          return Some(&mut *cell);
        }
      }
    }
    None
  }

  /// links origin cell with target, optionally bidirectionally
  pub fn link(&mut self, origin: i32, target: i32, bidi: bool) {
    println!("linking {} with {}", origin, target);
    let mut linked = false;
    // they all have 4 possible origins
    for i in 0..4 {
      match self.cell_by_id(origin).unwrap().links[i] {
        Some(_) => continue,
        None => {
          self.cell_by_id_mut(origin).unwrap().links[i] = Some(self.cell_by_id(target).unwrap().id);
          if bidi {
            self.link(target, origin, false);
          }
          linked = true;
        }
      }
    }
    if !linked {
      // Every link was already filled - can only have 4 maximum.
      panic!("Could not link!")
    }
  }
}

impl fmt::Display for Grid {
  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
    let mut ret = String::new();

    // print top row
    ret.push_str("+");
    for _ in 0..self.columns {
      ret.push_str("---+")
    }
    ret.push_str("\n");

    // print each row - each grid row has 2 lines of text to print
    // "top" is our vertical walls "|"
    // "bottom" is our horizontal walls "---"
    for row in &self.grid {
      let mut top = String::new();
      top.push_str("|");
      let mut bottom = String::new();
      bottom.push_str("+");

      for cell in row {
        top.push_str("   ");
        if (*cell).linked(cell.east) {
          top.push_str(" ");
        } else {
          top.push_str("|");
        }

        if cell.linked(cell.south) {
          bottom.push_str("   ");
        } else {
          bottom.push_str("---");
        }
        bottom.push_str("+");
      }

      ret.push_str(&top);
      ret.push_str("\n");
      ret.push_str(&bottom);
      ret.push_str("\n");
    }

    write!(f, "{}", ret)
  }
}

// in Ruby, these were methods on grid
// I think this is going to eventually be a trait
// it sounds like it would need to be swappable, and I had borrowchecker problems
// so here we are

// initializes a prepared grid with neighbors
fn configure_grid(grid: &Grid) -> Grid {
  let mut ret = grid.clone();
  map_cells(&mut ret, |cell: &mut Cell| {
    let row = cell.row;
    let col = cell.column;

    cell.north = get(&grid, row - 1, col);
    cell.south = get(&grid, row + 1, col);
    cell.west = get(&grid, row, col - 1);
    cell.east = get(&grid, row, col + 1);
  });
  ret
}

// instead of overloading []
/// Performs bounds-checking lookup on a &Grid
fn get(grid: &Grid, row: i32, column: i32) -> Option<i32> {
  if (row < 0 || row > grid.rows - 1) || (column < 0 || column > grid.columns - 1) {
    None
  } else {
    Some(grid.grid[row as usize][column as usize].id)
  }
}

/// takes a function to perform on each row
fn map_rows<F>(grid: &mut Grid, step: F)
where
  F: Fn(&mut Vec<Cell>),
{
  for row in &mut grid.grid {
    step(row);
  }
}

/// takes a function to perform on each cell
pub fn map_cells<F>(grid: &mut Grid, step: F)
where
  F: Fn(&mut Cell),
{
  map_rows(grid, |row| {
    for cell in row {
      step(cell);
    }
  });
}

/// returns a Vec<Vec<Cell>> of the given dimensions
fn prepare_grid(rows: i32, columns: i32) -> Vec<Vec<Cell>> {
  let mut ret = Vec::new();
  let mut current_id = 0;
  for i in 0..rows {
    let mut row = Vec::new();
    for j in 0..columns {
      row.push(Cell::new(current_id, i, j));
      current_id += 1;
    }
    ret.push(row);
  }
  ret
}
