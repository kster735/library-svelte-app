<script>
  import { onMount, afterUpdate } from "svelte";
  import {activeTheme} from '../../stores/themestore';

  let currentpage;
  
  afterUpdate(() => {
    currentpage = window.location.pathname;
  });

  const themeIcons = {
    "light": "#sun-fill",
    "dark": "#moon-stars-fill",
    "auto": "#circle-half",
  };

  onMount(()=> {
    document.querySelectorAll('.bi').forEach((element) => {
			if ($activeTheme==='dark') {
				element.style.fill = "white";
			} else if ($activeTheme === 'light') {
				element.style.fill = "black";
			} else  {
				element.style.fill = window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "black";
			}
			element.style.opacity = 0.7;
		});
  })


</script>
<nav class="navbar navbar-dark bg-dark bg-gradient sticky-top navbar-expand-sm shadow mb-4 py-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi-stars" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
      </svg>
      <span class="fs-4">staRS</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse align-items-center" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item">
          <a class={"nav-link " + (currentpage === '/library/client/' ? " active" : "")} href="/library/client">Home</a>
        </li>
        <li class="nav-item">
          <a class={"nav-link " + (currentpage === '/library/client/features' ? " active" : "")} href="/library/client/features">Features</a>
        </li>
        <li class="nav-item border-end-mq">
          <a class={"nav-link" + (currentpage === '/library/client/pricing' ? " active" : "")} href="/library/client/pricing">Pricing</a>
        </li>
        <li class="nav-item vr bg-white d-none d-sm-block mx-3"></li>
        <li class="nav-item dropdown w-100 text-center">
          <button class="btn w-100 nav-link dropdown-toggle d-flex justify-content-center align-items-center" 
            id="bd-theme"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-display="static" 
            aria-expanded="false"
            aria-label=""
          >
            <svg class="my-1 theme-icon-active" width="16" height="16" fill="currentColor"><use href={themeIcons[$activeTheme]}></use></svg>
            <span class="d-sm-none ms-2" id="bd-theme-text">Toggle theme</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-lg rounded-xl p-0 m-0" style="width: 100% !important">
            <li class="p-1 mx-1 mx-1 mt-2">
               <button
		        		type="button"
		        		class="dropdown-item d-flex align-items-center rounded"
                class:active={$activeTheme === 'light'}
		        		data-bs-theme-value="light"
		        		aria-pressed="false"
                on:click={()=> $activeTheme = "light"}
		        	>
		        		<svg class="bi me-2 opacity-50" width="16" height="16"><use href="#sun-fill"></use></svg>
		        		  Light
		        		<svg id="check" class="bi ms-auto" class:d-none={$activeTheme !== "light"} width="16" height="16"><use href="#check2"></use></svg>
		        	</button> 
            </li>
            <li class="p-1 mx-1">
		        	<button
		        		type="button"
		        		class="dropdown-item d-flex align-items-center rounded"
                class:active={$activeTheme === 'dark'}
		        		data-bs-theme-value="dark"
		        		aria-pressed="true"
                on:click={()=> $activeTheme = "dark"}
		        	>
		        		<svg class="bi me-2 opacity-50" width="16" height="16"><use href="#moon-stars-fill"></use></svg>
		        		Dark
		        		<svg id="check" class="bi ms-auto"  class:d-none={$activeTheme !== "dark"} width="16" height="16"><use href="#check2"></use></svg>
		        	</button>
            </li>
            <li class="p-1 mx-1 mb-2">
            <button
		        		type="button"
		        		class="dropdown-item d-flex align-items-center rounded"
                class:active={$activeTheme === "auto"}
		        		data-bs-theme-value="auto"
		        		aria-pressed="false"
                on:click={()=> $activeTheme = "auto"}
		        	>
		        		<svg class="bi me-2 opacity-50" width="16" height="16"><use href="#circle-half"></use></svg>
		        		  Auto
		        		<svg id="check" class="bi ms-auto"  class:d-none={$activeTheme !== "auto"} width="16" height="16"><use href="#check2"></use></svg>
		        	</button> 
            </li>
          </ul>
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
    transition: all 0.2s cubic-bezier( 0.79, 0.33, 0.14, 0.53 );
  }

  button.nav-link.dropdown-toggle[aria-expanded="false"]::after {
    transform: rotate(0deg);
  }

  a.navbar-brand svg{
    transition: all 0.2s cubic-bezier( 0.79, 0.33, 0.14, 0.53 );
  }

  a.navbar-brand svg:hover{
    transform: scale(1.2) rotateZ(-5deg); 
  }

</style>