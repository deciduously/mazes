use rand::{thread_rng, Rng};

use crate::{
    cell::Cell,
    grid::{map_cells, map_rows, Grid},
};

// The BinaryTree algorithm walks through each cell
// In each, it randomly links either the cell to the north or the cell to the east if available

pub fn binary_tree(mut grid: Grid) -> Grid {
    let mut rng = thread_rng();
    let mut ret = Grid::new(grid.rows, grid.columns);
    map_cells(&mut grid, |cell: &Cell| {
        // Grab possible links
        let mut neighbors = Vec::new();
        if let Some(id) = cell.north {
            neighbors.push(id)
        }
        if let Some(id) = cell.east {
            neighbors.push(id)
        }

        // Link one of them
        if let Some(id) = rng.choose(&neighbors) {
            ret.link(cell.id, *id)
        }
    });
    ret
}

// The Sidewinder algorithm looks at a row at a time
// For each row, it walks through cells linking east storing them in a run as it goes
// There is a 33% chance of ending the run after each cell, and the end of the row always ends the run
// To close the run, we randomly link one of the run to the north if there's a row above us
// It then clears out the stored cells we've seen and continues through the row

pub fn sidewinder(mut grid: Grid) -> Grid {
    let mut rng = thread_rng();
    let mut ret = Grid::new(grid.rows, grid.columns);
    map_rows(&mut grid, |row: &[Cell]| {
        let mut run = Vec::new();
        for cell in row {
            run.push(cell);

            if cell.east.is_none() || (cell.north.is_some() && rng.gen_range(0, 2) == 0) {
                // ending the run, randomly link one of the run north
                let lucky_winner = rng.choose(&run).unwrap();
                if let Some(north_id) = lucky_winner.north {
                    ret.link(lucky_winner.id, north_id)
                }
                run = Vec::new();
            } else {
                // otherwise link east
                ret.link(cell.id, cell.east.unwrap())
            }
        }
    });
    ret
}
