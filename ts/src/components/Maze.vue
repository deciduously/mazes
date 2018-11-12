<template>
  <div class="Maze">
      <h1>Mazes</h1>
      <form>
        <fieldset class="algo">
            <legend>Algorithm</legend>
            <input type="radio" class="radio-button" id="binarytree" value="binarytree"  v-model="algo">
            <label for="binarytree">Binary Tree</label>
            <input type="radio" class="radio-button" id="sidewinder" value="sidewinder"  v-model="algo">
            <label for="sidewinder">Sidewinder</label>
        </fieldset>
      </form>
      <pre>{{ mazeString }}</pre>
      <canvas v-draw-maze="maze"></canvas>
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
      grid_size: 20,
      color: "#000"
    };
  }

  get maze(): Grid {
    const g = new Grid(
      this.$data.rows,
      this.$data.columns,
      this.$data.grid_size
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
    return this.maze.toString();
  }
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
