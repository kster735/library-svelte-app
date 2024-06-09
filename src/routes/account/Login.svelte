<script>
  import LoginForm from "../../lib/components/navigation/forms/LoginForm.svelte";
  import { page } from "../../lib/stores/pagestore";
  $: $page = `/login`;
  $: title = "Login"
</script>

  <svelte:head>
    <title>{title}</title>
  </svelte:head>
<div class="container">
  <LoginForm />
</div>