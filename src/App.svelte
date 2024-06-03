<script>
  import { onMount } from "svelte";
  import "./app.scss";
  import Navbar from "./lib/components/navigation/Navbar.svelte";
  
  import Home from "./routes/Home.svelte";
  import Features from "./routes/Features.svelte";
  import Pricing from "./routes/Pricing.svelte";

  import Router from "svelte-spa-router";

  onMount(async () => {
    // this is enough for most components
    // @ts-ignore
    await import("bootstrap");
    // some components require a bootstrap instance, to fulfil their job. In that case, use this:
    // const bootstrap = await import("bootstrap");
    // sample usage:
    // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  });

  const routes = {
    '/': Home,
    '/features': Features,
    '/pricing': Pricing,
  }
</script>
<header>
  <Navbar></Navbar>
</header>
<main class="min-vh-100">
  <Router {routes}/>
</main>

<footer class="bg-dark text-secondary p-5">
  &copy; MIT Liscence 2024 iflexico
</footer>
<style>
</style>
