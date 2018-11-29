extern crate rand;

//mod binary_tree;
mod cell;
mod grid;
//mod sidewinder;

use self::grid::Grid;

fn main() {
    let empty = Grid::new(10, 10);
    //let bt = binary_tree::binary_tree(empty);
    println!("{}", empty);
}
