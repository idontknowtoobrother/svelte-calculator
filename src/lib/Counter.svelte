<script lang='ts'>
  import { increment, count } from "./Counter";
</script>

<button on:click={increment}>
  count is {count}
</button>
