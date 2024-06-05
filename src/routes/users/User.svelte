<script>
  export let params = {};
  import {page} from '../../lib/stores/pagestore';

  $: $page=`/users/${params.id}`;
</script>
<div class="container">
  User details. {params.id}
</div>