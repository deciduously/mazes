#[derive(Clone, Copy, Debug)]
pub struct Cell {
  pub id: i32,
  pub row: i32,
  pub column: i32,
  pub north: Option<i32>,
  pub south: Option<i32>,
  pub east: Option<i32>,
  pub west: Option<i32>,
  pub links: [Option<i32>; 4],
}

impl Cell {
  pub fn new(id: i32, row: i32, column: i32) -> Self {
    Self {
      id,
      row,
      column,
      north: None,
      south: None,
      east: None,
      west: None,
      links: [None, None, None, None],
    }
  }

  /// links self with target, optionally bidirectionally
  pub fn link(&mut self, target: &mut Cell, bidi: bool) {
    let mut linked = false;
    // they all have 4 possible origins
    for i in 0..4 {
      match self.links[i] {
        Some(_) => continue,
        None => {
          self.links[i] = Some(target.id);
          if bidi {
            target.link(self, false);
          }
          linked = true;
          break;
        }
      }
    }
    if !linked {
      // Every link was already filled - can only have 4 maximum.
      panic!("Could not link!")
    }
  }

  ///linked is a predicate testing whether Cell is linked to target
  pub fn linked(&self, target: Option<i32>) -> bool {
    match target {
      Some(x) => {
        for link in &self.links {
          match link {
            Some(y) => {
              if x == *y {
                return true;
              }
            }
            None => {}
          }
        }
        false
      }
      None => false,
    }
  }
}
