<script>
  export let params = {};
  import { page } from "../../lib/stores/pagestore";

  $: $page = `/books/${params.id}`;
  $: title = `One Book. ${params.id}`;
</script>

<svelte:head>
  <title>
    {title}
  </title>
</svelte:head>
<div class="container">
  <h1 class="display-1">
    {title}
  </h1>
</div>
