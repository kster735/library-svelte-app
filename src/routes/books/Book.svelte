<script>
  export let params = {};
  import { page } from "../../lib/stores/pagestore";

  $: $page = `/books/${params.id}`;
</script>

<div class="container">
  One Book. {params.id}
</div>
