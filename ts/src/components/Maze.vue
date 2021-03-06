<template>
  <div class="Maze">
    <h1>{{ title }}</h1>
    <button v-on:click="refreshMaze">New Maze</button>
    <input type="checkbox" id="ascii" v-model="ascii">
    <label for="ascii">Render ASCII?</label>
    <input type="checkbox" id="distances" v-model="distances">
    <label for="distances">Render solved ASCII, NW to SW?</label>
    <form v-on:change="refreshMaze">
      <fieldset class="algo">
        <legend>Algorithm</legend>
        <input type="radio" class="radio-button" id="binarytree" value="binarytree" v-model="algo">
        <label for="binarytree">Binary Tree</label>
        <input type="radio" class="radio-button" id="sidewinder" value="sidewinder" v-model="algo">
        <label for="sidewinder">Sidewinder</label>
      </fieldset>
      <fieldset>
        <legend>Size</legend>
        <span>{{ rows }}</span>
        <input type="range" min="2" max="200" id="rows" v-model="rows">
        <label for="rows">Rows</label>
        <br>
        <span>{{ columns }}</span>
        <input type="range" min="2" max="200" id="columns" v-model="columns">
        <label for="columns">Columns</label>
        <br>
        <span>{{ cellSize }}</span>
        <input type="range" min="1" max="50" id="cellSize" v-model="cellSize">
        <label for="cellSize">Cell Size</label>
        <br>
        <!-- <input type="checkbox" id="square" v-model="square">
        <label for="square">Square?</label>-->
      </fieldset>
    </form>
    <canvas v-draw-maze="maze"></canvas>
    <pre v-if="ascii">{{ mazeString }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DistanceGrid from "@/maze/distanceGrid";
import Grid, { applyAlgorithm } from "@/maze/grid";

@Component({
  directives: {
    "draw-maze": function(canvasElement, binding) {
      binding.value.draw(canvasElement as HTMLCanvasElement);
    }
  }
})
export default class Maze extends Vue {
  @Prop()
  private title!: string;

  private data() {
    return {
      algo: "binarytree",
      ascii: false,
      distances: false,
      square: false,
      rows: 20,
      columns: 20,
      cellSize: 10
    };
  }

  private refreshMaze(): void {
    // hacky but seems to work
    const savedSize = this.$data.cellSize;
    this.$data.cellSize = 1;
    this.$data.cellSize = savedSize;
  }

  // computed properties

  get maze(): Grid {
    let g;
    if (!this.$data.distances) {
      g = new Grid(this.$data.rows, this.$data.columns, this.$data.cellSize);
      applyAlgorithm(g, this.$data.algo);
    } else {
      g = new DistanceGrid(
        this.$data.rows,
        this.$data.columns,
        this.$data.cellSize
      );
      applyAlgorithm(g, this.$data.algo);
      const start = g.getCell(0, 0)!;
      const distances = start.distances();
      g.distances = distances.pathTo(g.getCell(g.rows - 1, 0)!);
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
