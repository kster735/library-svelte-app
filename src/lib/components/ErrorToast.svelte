<script>
  export let message;
  export let id;
</script>

<div class="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
  <div class="toast" {id} role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <div class="rounded me-2 bg-danger" style="width: 16px; height: 16px"/>
      <strong class="me-auto">Error </strong>
      <small>dsd</small>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">
      {message}
    </div>
  </div>
</div>
