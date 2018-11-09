<template>
  <app>
    <h1>Mazes</h1>
    <form>
      <fieldset>
          <legend>Algorithm</legend>
          <input type="radio" class="radio-button" id="binarytree" value="binarytree"  v-model="algo">
          <label for="binarytree">Binary Tree</label>
          <input type="radio" class="radio-button" id="sidewinder" value="sidewinder"  v-model="algo">
          <label for="sidewinder">Sidewinder</label>
      </fieldset>
    </form>
    <canvas></canvas>
    <pre>{{ mazeString }}</pre>
  </app>
</template>

<script lang="ts">
//import { binaryTree, sidewinder } from "./algo";
import grid from "../grid";
import Vue from "vue";
//import component from "vue-class-component"; //not using this yet

// makes a new maze and draws it to a the canvas
// will be a method on the component?
//const drawMaze = (algo: string) => {
//  // set up grid parameters
//  const gridW = 100;
//  const gridH = 100;
//  const cellSize = 15;
//
//  // Build maze
//  const maze: grid = new grid(
//    document.querySelector("canvas")!,
//    gridW,
//    gridH,
//    cellSize
//  );
//  switch (algo) {
//    case "binarytree":
//      binaryTree(maze);
//    case "sidewinder":
//      sidewinder(maze);
//      break;
//    default:
//      console.log(`Unrecongized: ${algo} - rending binary tree`);
//      binaryTree(maze);
//  }
//  maze.draw();
//};

//const form = document.querySelector("form")!;
//
//form.onsubmit = () => {
//  const data = new FormData(form);
//  const algo = data.get("algo") as string;
//  drawMaze(algo);
//  return false; // prevent reload
//};

// main();

export default Vue.extend({
  data() {
    return {
      rows: 15,
      columns: 15,
      grid_size: 20,
      color: "#000",
      algo: "binarytree"
    };
  },
  computed: {
    maze(): grid {
      let g = new grid(
        document.querySelector("canvas")!,
        this.$data.rows,
        this.$data.columns,
        this.$data.grid_size
      );
      return g;
    },
    mazeString: function(): string {
      return this.maze.toString();
    }
  }
});
</script>

<style>
h1 {
  font-style: italic;
}
</style>