extern crate image;
extern crate imageproc;
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
    let mut grid = Grid::new(10, 10);
    match algo {
        "s" | "sidewinder" => {
            grid = sidewinder(&grid);
            println!("Sidewinder:")
        }
        "bt" | _ => {
            grid = binary_tree(&grid);
            println!("Binary Tree:")
        }
    }
    println!("{}", grid);
    grid.to_img(None);
}
