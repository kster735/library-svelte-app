<script>
	function doDelete() {
		alert('Sending request to delete the item');
	}
</script>

<button class="xbtn" data-bs-toggle="modal" data-bs-target="#deleteModal">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="white"
		class="bi bi-x"
		viewBox="0 0 16 16"
	>
		<path
			d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
		/>
	</svg>
</button>

<!-- Modal -->
<div
	class="modal fade"
	id="deleteModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title text-danger fs-5" id="exampleModalLabel">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						class="bi bi-exclamation-triangle-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
						/>
					</svg>
				</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">Are you sure you want to delete this book?</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-danger" on:click={doDelete} data-bs-dismiss="modal"
					>Delete</button
				>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	svg {
    fill: currentColor !important;
  }
  
  .xbtn {
		display: flex;
		padding: 0;
		background-color: var(--bs-red);
		border-radius: 50%;
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		cursor: pointer;
		border: none;

		&:hover,
		&:focus,
		&:active {
			opacity: 0.8;
			scale: 1.1;
		}
	}
</style>
