<script>
  import { LayerCake, Svg, Canvas, Html } from "layercake";

  const points = [
    { x: 0, y: 0 },
    { x: 5, y: 10 },
    { x: 10, y: 20 },
    { x: 15, y: 30 },
    { x: 20, y: 40 },
  ];
</script>

<div class="chart-container">
  <LayerCake data={points} x="x" y="y">
    <!-- Components go here -->
    <Canvas />
  </LayerCake>
</div>

<style>
  .chart-container {
    width: 100%;
    height: 300px;
  }
</style>
