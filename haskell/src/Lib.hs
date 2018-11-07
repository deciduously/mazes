module Lib
    ( someFunc
    ) where

-- node = cell
-- edge = passage

data Maze a = Node a | Edge (Maybe Node a) (Maybe Node a)

someFunc :: IO ()
someFunc = putStrLn "someFunc"
