<script>
  import { activeTheme } from "../../stores/themestore";
  import { page } from "../../stores/pagestore";

  $: pg = $page;

  $: ids = pg.substring(1).split("/"); 
	
  $: bg = $activeTheme === "light" ? "light" : "dark";
</script>

<!-- <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="bread container rounded shadow-sm text-capitalize my-5" data-bs-theme={bg}> -->

<nav
  style="--bs-breadcrumb-divider: '>';"
  aria-label="breadcrumb"
  class="container text-capitalize my-5"
  data-bs-theme={bg}
>
 
  <ol class="breadcrumb p-3">
    <li class="breadcrumb-item">
      {#if pg === "/"}
        Home
      {:else}
        <a href="#/">Home</a>
      {/if}
    </li>
    {#each ids as id}
      {#if ids.indexOf(id) == ids.length - 1}
        <li class={"breadcrumb-item active"} aria-current="page">
          {id}
        </li>
      {:else}
        <li class={"breadcrumb-item"}>
          <a href="#/{id}">{id}</a>
        </li>
      {/if}
    {/each}
  </ol>
</nav>

<slot />

<style lang="scss">
  nav.bread[data-bs-theme="light"] {
    background-color: $white;
    color: black;
  }

  nav.bread[data-bs-theme="dark"] {
    background-color: $dark;
    color: $white;
  }
</style>
