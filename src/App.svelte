<script>
  import { onMount } from "svelte";
  import "./app.scss";
  import Navbar from "./lib/components/navigation/Navbar.svelte";
  
  import Home from "./routes/Home.svelte";

  import Router from "svelte-spa-router";
  import Books from "./routes/books/Books.svelte";
  import Book from "./routes/books/Book.svelte";
  import Borrowing from "./routes/books/Borrowing.svelte";
  import Users from "./routes/users/Users.svelte";
  import User from "./routes/users/User.svelte";
  import UserAdd from "./routes/users/UserAdd.svelte";
  import BookAdd from "./routes/books/BookAdd.svelte";
  import Account from "./routes/account/Account.svelte";
  import Breadcrumb from "./lib/components/navigation/Breadcrumb.svelte";
  import { page } from "./lib/stores/pagestore";

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
    '/books': Books,
    '/books/:id': Book,
    '/books/borrowing': Borrowing,
    '/books/add': BookAdd,
    '/users': Users,
    '/users/:id': User,
    '/users/add': UserAdd,
    '/account': Account,
  }

</script>
<header>
  <Navbar></Navbar>
</header>
<main class="min-vh-100">
  <Breadcrumb />
  <Router {routes} />
</main>

<footer class="bg-dark bg-gradient p-5">
  &copy; MIT Liscence 2024 iflexico
</footer>
<style>
</style>
