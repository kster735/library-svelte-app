<script>
  export let email = "";
  export let password = "";

  let loginForm;

  function handleSubmit() {
    if (!loginForm.checkValidity()) {
      console.log(loginForm.reportValidity());
      loginForm.classList.add("was-validated");
      return;
    }

    alert(
      JSON.stringify({
        email: email,
        password: password,
      })
    );
  }
</script>

<form
  method="post"
  bind:this={loginForm}
  on:submit|preventDefault={handleSubmit}
  class="border p-5 rounded shadow"
  novalidate
>
  <fieldset>
    <legend class=""> Login Form </legend>
    <div class="mb-5" style="color: grey">Please enter your credentials.</div>
    <div class="mb-3">
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
    <div class="mb-3">
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
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
    <br />
    <br />
    <span>You don't have an account?</span>
    <a href="#/signup">Sign up</a>
  </fieldset>
</form>
