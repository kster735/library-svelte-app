<script>
  import { page } from "../../lib/stores/pagestore";
  $: $page = "/users";
  $: title = 'Users';
</script>
<svelte:head>
  {$page}
</svelte:head>
<div class="container">All users</div>
