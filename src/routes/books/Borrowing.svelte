<script>
  import {page} from '../../lib/stores/pagestore';

  $: $page='/books/borrowing';
  $: title='Borrowing';
</script>
<svelte:head>
  <title>
    {title}
  </title>
</svelte:head>
<div class="container">
  Borrowing
</div>