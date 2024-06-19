<script>
  import { setContext, getContext } from "svelte";

  import { push } from "svelte-spa-router";
  let email = "";
  let password = "";
  let confirmPassword = "";
  let libname = "";

  let responseData = null;

  let registerForm;

  let toastStore = getContext('toastMessages');

  async function handleSubmit() {
    if (!registerForm.checkValidity()) {
      console.log(registerForm.reportValidity());
      registerForm.classList.add("was-validated");
      return;
    }

    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        libname: libname,
      }),
    });

    responseData = await response.json();

    if (responseData.error) {
      alert("Error :" + JSON.stringify(responseData));
      // const dispatch = createEventDispatcher();
      $toastStore = {
        error: true,
        message: responseData.error.message,
      }

      setContext('toastMessages', $toastStore);

    } else {
      push("/login");
    }
  }

  function clearForm() {
    email = "";
    password = "";
    confirmPassword = "";
    libname = "";
  }
</script>

<div class="row">
  <form
    method="post"
    bind:this={registerForm}
    on:submit|preventDefault={handleSubmit}
    class="col col-md-6 offset-md-3 border p-5 mb-5 rounded shadow"
    novalidate
  >
    <fieldset>
      <legend class=""> Register Form </legend>
      <div class="mb-5" style="color: grey">
        Use a valid email and a password to signup.
      </div>

      <div class="row g-3">
        <div class="col-12 col-sm-6 mb-5">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            bind:value={email}
            class="form-control"
            aria-describedby="emailHelp"
            required
          />
          <div class="invalid-feedback">Please provide a valid email.</div>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="col-12 col-sm-6 mb-5">
          <label for="libname" class="form-label">Library name</label>
          <input
            type="text"
            id="libname"
            name="libname"
            bind:value={libname}
            class="form-control"
            aria-describedby="libNameHelp"
            required
          />
          <div id="libNameHelp" class="form-text">
            Choose a unique library name.
          </div>
        </div>
      </div>
      <div class="mb-2">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          bind:value={password}
          id="password"
          minlength="6"
          required
        />
        <div class="invalid-feedback">
          Password should be at least six characters long.
        </div>
      </div>
      <div class="mb-5">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          class="form-control"
          bind:value={confirmPassword}
          id="confirmPassword"
          minlength="6"
          pattern={password}
          required
        />
        <div class="invalid-feedback">The passwords do not match.</div>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
        <label class="form-check-label" for="exampleCheck1">Accept terms and conditions</label>
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
      <button class="btn btn-outline-primary" on:click={clearForm}>Clear</button
      >
      <br />
      <br />
      <span>Already have an account?</span>
      <a href="#/login">Login</a>
    </fieldset>
  </form>
</div>
