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
      <canvas></canvas>
      <pre>{{ mazeString }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Grid from "../maze/grid";

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
    let g = new Grid(
      document.querySelector("canvas")!,
      this.$data.rows,
      this.$data.columns,
      this.$data.grid_size
    );
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
