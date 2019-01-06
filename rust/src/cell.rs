#[derive(Clone, Debug)]
pub struct Cell {
    pub id: i32,
    pub row: i32,
    pub column: i32,
    pub north: Option<i32>,
    pub south: Option<i32>,
    pub east: Option<i32>,
    pub west: Option<i32>,
    pub links: Vec<i32>, // list of linked IDs
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
            // Ruby is using a hashmap - I'm not sure why I can't just use a Vec
            links: Vec::new(),
        }
    }

    /// linked is a predicate testing whether Cell is linked to target
    pub fn linked(&self, target: Option<i32>) -> bool {
        match target {
            Some(x) => {
                for link in &self.links {
                    if x == *link {
                        return true;
                    }
                }
                false
            }
            None => false,
        }
    }
}
