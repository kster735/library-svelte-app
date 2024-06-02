<script>
  import { onMount } from "svelte";
  import "./app.scss";

  onMount(async () => {
    // this is enough for most components
    // @ts-ignore
    await import("bootstrap");
    // some components require a bootstrap instance, to fulfil their job. In that case, use this:
    // const bootstrap = await import("bootstrap");
    // sample usage:
    // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  });
</script>

<div>Home</div>

<style>
</style>
