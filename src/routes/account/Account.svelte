<script>
  import { page } from "../../lib/stores/pagestore";
  $: $page = `/account`;
  $: title = "Account";
</script>
<svelte:head>
  <title>
    {title}
  </title>
</svelte:head>
<div class="container">
  Account Settings
</div>