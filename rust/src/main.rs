extern crate rand;

mod binary_tree;
mod cell;
mod grid;

use self::grid::Grid;

fn main() {
    let mut grid = Grid::new(8, 8);
    binary_tree::binary_tree(&mut grid);
    println!("{}", grid);
}
