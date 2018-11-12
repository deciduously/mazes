import Vue from 'vue';
import App from './App.vue';
import Grid from './maze/grid';

Vue.config.productionTip = false;

// To approximate img.line() from chunky_png in Ruby
const drawLine = (
  x1: number, y1: number, x2: number, y2: number, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);

  ctx.strokeStyle = '#000';
  ctx.stroke();
};

Vue.directive('draw-maze', (canvasElement, binding) => {
  const canvas = canvasElement as HTMLCanvasElement;
  const maze = binding.value as Grid;

  // resize canvas
  canvas.width = maze.canvasW;
  canvas.height = maze.canvasH;

  const ctx = canvas.getContext('2d')!;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  maze.eachCell((cell) => {
    // get boundaries
    const x1 = cell.column * maze.cellSize;
    const y1 = cell.row * maze.cellSize;
    const x2 = (cell.column + 1) * maze.cellSize;
    const y2 = (cell.row + 1) * maze.cellSize;

    // always draw north wall if we're in the top row
    if (!cell.north) { drawLine(x1, y1, x2, y1, ctx); }

    // always draw west wall if we're in the west row
    if (!cell.west) { drawLine(x1, y1, x1, y2, ctx); }

    // draw east wall unless linked
    if (!cell.isLinked(cell.east)) { drawLine(x2, y1, x2, y2, ctx); }

    // draw south wall unless linked
    if (!cell.isLinked(cell.south)) { drawLine(x1, y2, x2, y2, ctx); }
  });
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
