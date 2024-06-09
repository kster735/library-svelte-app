<script>
  export let params = {};
  import {page} from '../../lib/stores/pagestore';

  $: $page=`/users/${params.id}`;
</script>
<svelte:head>
  <title>User {params.id}</title>
</svelte:head>
<div class="container">
  User details. {params.id}
</div>