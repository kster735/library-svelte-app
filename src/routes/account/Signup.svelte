<script>
  import {page} from '../../lib/stores/pagestore';
  import SignupForm from '../../lib/components/navigation/forms/SignupForm.svelte';
  $: $page = '/signup';
  $: title = 'Signup';
</script>

<svelte:head>
  <title>
    {title}
  </title>
</svelte:head>

<div class="container">
  <SignupForm />
</div>