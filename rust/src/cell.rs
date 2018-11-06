use std::cell::RefCell;

#[derive(Clone, Debug)]
pub struct Cell<'a> {
  pub id: i32,
  pub row: i32,
  pub column: i32,
  pub north: Option<i32>,
  pub south: Option<i32>,
  pub east: Option<i32>,
  pub west: Option<i32>,
  pub links: RefCell<Vec<&'a Cell<'a>>>,
}

impl<'a> Cell<'a> {
  pub fn new(id: i32, row: i32, column: i32) -> Self {
    Self {
      id,
      row,
      column,
      north: None,
      south: None,
      east: None,
      west: None,
      // Ruby is using a hashmap - I'm not sure why I can't just use a Vec
      links: RefCell::new(Vec::new()),
    }
  }

  /// links self with target, optionally bidirectionally
  pub fn link(&self, target: &'a Cell<'a>, bidi: bool) {
    // we have a reference to the target
    // and are borrow_mut'ing
    {self.links.borrow_mut().push(target);}
    if bidi {
      (*target).link(self, false);
    }
  }

  ///linked is a predicate testing whether Cell is linked to target
  pub fn linked(&self, target: Option<i32>) -> bool {
    //match target {
    //  Some(x) => {
    //    for link in &self.links {
    //      match link {
    //        Some(y) => {
    //          if x == *y {
    //            return true;
    //          }
    //        }
    //        None => {}
    //      }
    //    }
    //    false
    //  }
    //  None => false,
    //}
  }
}
