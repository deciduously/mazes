require 'grid'
require 'binary_tree'   

grid = Grid.new(500, 500)
BinaryTree.on(grid)
puts grid

img = grid.to_png
img.save "maze.png"