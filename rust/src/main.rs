extern crate rand;

mod algo;
mod cell;
mod grid;

use self::{
    algo::{binary_tree, sidewinder},
    grid::Grid,
};

fn main() {
    let args: Vec<String> = ::std::env::args().collect();
    let algo = if args.len() > 1 { &args[1] } else { "bt" };
    let empty = Grid::new(10, 10);
    match algo {
        "s" | "sidewinder" => println!("Sidewinder\n{}", sidewinder(empty)),
        "bt" | _ => println!("Binary Tree\n{}", binary_tree(empty)),
    }
}
