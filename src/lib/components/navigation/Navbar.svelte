<script>
  import { onMount } from "svelte";
  import { activeTheme } from "../../stores/themestore";

  $: currentpage = window.location.pathname;

  const themeIcons = {
    light: "#sun-fill",
    dark: "#moon-stars-fill",
    auto: "#circle-half",
  };

  onMount(() => {
    document.querySelectorAll(".bi").forEach((element) => {
      if ($activeTheme === "dark") {
        element.style.fill = "white";
      } else if ($activeTheme === "light") {
        element.style.fill = "black";
      } else {
        element.style.fill = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "white"
          : "black";
      }
      element.style.opacity = 0.7;
    });
  });
</script>

<nav class="navbar sticky-top navbar-expand-sm border border-bottom mb-4 py-3">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center gap-2" href="#/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-buildings"
        viewBox="0 0 16 16"
      >
        <path
          d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"
        />
        <path
          d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"
        />
      </svg>
      Library
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse align-items-center"
      id="navbarNavDropdown"
    >
      <ul class="navbar-nav ms-auto align-items-center">
        <!-- <li class="nav-item">
          <a class={"nav-link " + (currentpage === '#/' ? " active" : "")} href="#/">Home</a>
        </li> -->
        <li class="nav-item">
          <a
            class={"nav-link " + (currentpage === "#/books" ? " active" : "")}
            href="#/books">Books</a
          >
        </li>
        <li class="nav-item border-end-mq">
          <a
            class={"nav-link" + (currentpage === "#/users" ? " active" : "")}
            href="#/users">Users</a
          >
        </li>
        <li class="nav-item border-end-mq">
          <a
            class={"nav-link" +
              (currentpage === "#/books/borrowing" ? " active" : "")}
            href="#/books/borrowing">Borrowing</a
          >
        </li>
        <li class="nav-item vr bg-white d-none d-sm-block mx-3"></li>
        <li class="nav-item dropdown w-100 text-center">
          <button
            class="btn w-100 nav-link dropdown-toggle d-flex justify-content-center align-items-center"
            id="bd-theme"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
            aria-label=""
          >
            <svg
              class="my-1 theme-icon-active"
              width="16"
              height="16"
              fill="currentColor"
              ><use href={themeIcons[$activeTheme]}></use></svg
            >
            <span class="d-sm-none ms-2" id="bd-theme-text">Toggle theme</span>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end shadow-lg rounded-xl p-0 m-0"
            style="width: 100% !important"
          >
            <li class="p-1 mx-1 mx-1 mt-2">
              <button
                type="button"
                class="dropdown-item d-flex align-items-center rounded"
                class:active={$activeTheme === "light"}
                data-bs-theme-value="light"
                aria-pressed="false"
                on:click={() => ($activeTheme = "light")}
              >
                <svg class="bi me-2 opacity-50" width="16" height="16"
                  ><use href="#sun-fill"></use></svg
                >
                Light
                <svg
                  id="check"
                  class="bi ms-auto"
                  class:d-none={$activeTheme !== "light"}
                  width="16"
                  height="16"><use href="#check2"></use></svg
                >
              </button>
            </li>
            <li class="p-1 mx-1">
              <button
                type="button"
                class="dropdown-item d-flex align-items-center rounded"
                class:active={$activeTheme === "dark"}
                data-bs-theme-value="dark"
                aria-pressed="true"
                on:click={() => ($activeTheme = "dark")}
              >
                <svg class="bi me-2 opacity-50" width="16" height="16"
                  ><use href="#moon-stars-fill"></use></svg
                >
                Dark
                <svg
                  id="check"
                  class="bi ms-auto"
                  class:d-none={$activeTheme !== "dark"}
                  width="16"
                  height="16"><use href="#check2"></use></svg
                >
              </button>
            </li>
            <li class="p-1 mx-1 mb-2">
              <button
                type="button"
                class="dropdown-item d-flex align-items-center rounded"
                class:active={$activeTheme === "auto"}
                data-bs-theme-value="auto"
                aria-pressed="false"
                on:click={() => ($activeTheme = "auto")}
              >
                <svg class="bi me-2 opacity-50" width="16" height="16"
                  ><use href="#circle-half"></use></svg
                >
                Auto
                <svg
                  id="check"
                  class="bi ms-auto"
                  class:d-none={$activeTheme !== "auto"}
                  width="16"
                  height="16"><use href="#check2"></use></svg
                >
              </button>
            </li>
          </ul>
        </li>
        <li class="nav-item vr bg-white d-none d-sm-block mx-3"></li>
        <li class="nav-item border-end-mq">
          <a
            class={"nav-link" + (currentpage === "#/account" ? " active" : "")}
            href="#/account">Account</a
          >
        </li>
        <li class="nav-item">
          <a
            class={"nav-link " + (currentpage === "#/login" ? " active" : "")}
            href="#/login">Login</a
          >
        </li>
        <li class="nav-item">
          <a
            class={"nav-link " + (currentpage === "#/signup" ? " active" : "")}
            href="#/signup">Signup</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

<style lang="scss">
  ul.dropdown-menu {
    width: 20px !important;
  }

  button.nav-link.dropdown-toggle::after {
    transform: rotate(-180deg);
    transition: all 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53);
  }

  button.nav-link.dropdown-toggle[aria-expanded="false"]::after {
    transform: rotate(0deg);
  }

  a.navbar-brand svg {
    transition: all 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53);
  }

  a.navbar-brand svg:hover {
    transform: scale(1.2) rotateZ(-5deg);
  }

  nav {
    backdrop-filter: blur(10px);
  }
</style>
