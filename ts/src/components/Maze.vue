<template>
  <div class="Maze">
      <h1>Mazes</h1>
      <button v-on:click="refreshMaze">Redraw</button>
      <form v-on:change="refreshMaze">
        <fieldset class="algo">
            <legend>Algorithm</legend>
            <input type="radio" class="radio-button" id="binarytree" value="binarytree"  v-model="algo">
            <label for="binarytree">Binary Tree</label>
            <input type="radio" class="radio-button" id="sidewinder" value="sidewinder"  v-model="algo">
            <label for="sidewinder">Sidewinder</label>
        </fieldset>
        <fieldset>
          <legend>Size</legend>
          <input type="text" class="textbox" id="rows" v-model="rows">
          <label for="rows">Rows</label>
          <input type="text" class="textbox" id="columns" v-model="columns">
          <label for="columns">Columns</label>
          <input type="text" class="textbox" id="cellSize" v-model="cell_size">
          <label for="cellSize">Cell Size</label>
        </fieldset>
      </form>
      <canvas v-draw-maze="currentMaze"></canvas>
      <pre>{{ mazeString }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Grid from "../maze/grid";
import { binaryTree, sidewinder } from "@/maze/algo";

@Component
export default class Maze extends Vue {
  @Prop()
  private title!: string;

  data() {
    return {
      algo: "binarytree",
      rows: 15,
      columns: 15,
      cell_size: 20,
      currentMaze: this.maze || new Grid(15, 15, 20)
    };
  }

  // methods

  refreshMaze(): void {
    // force a redraw by tweaking and untweaking rows by 1
    this.$data.rows += 1;
    this.$data.rows -= 1;
    this.$data.currentMaze = this.maze;
  }

  // computed properties

  get maze(): Grid {
    const g = new Grid(
      this.$data.rows,
      this.$data.columns,
      this.$data.cell_size
    );
    switch (this.$data.algo) {
      case sidewinder:
        sidewinder(g);
        break;
      case "binarytree":
      default:
        binaryTree(g);
    }
    return g;
  }

  get mazeString(): string {
    return this.$data.currentMaze.toString();
  }
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
