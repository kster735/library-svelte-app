<script>
  import routes from "../.routify/routes.default.js";
  import { Router, createRouter } from "@roxi/routify";
  import { onMount } from "svelte";
  import "./app.scss";
  import Navbar from "./lib/components/navigation/Navbar.svelte";

  onMount(async () => {
    // this is enough for most components
    // @ts-ignore
    await import("bootstrap");
    // some components require a bootstrap instance, to fulfil their job. In that case, use this:
    // const bootstrap = await import("bootstrap");
    // sample usage:
    // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  });

  export const router = createRouter({
    routes,
  });
</script>

<Navbar></Navbar>
<Router {router}></Router>

<style>
</style>
