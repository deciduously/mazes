<template>
  <div id="app">
    <Maze title="Make some Mazes"/>
    <footer>
      <a href="https://github.com/deciduously/mazes/tree/master/ts">source</a>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Maze from "./components/Maze.vue";

@Component({
  components: {
    Maze
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
