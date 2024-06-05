<div class="dropdown">
	<button
		class="btn btn-primary dropdown-toggle"
		type="button"
		data-bs-toggle="dropdown"
		aria-expanded="false"
	>
		Dropdown button
	</button>
	<ul class="dropdown-menu dropdown-menu-end shadow-lg rounded-xl p-0 m-0">
		<slot>
			<li class="p-1 mx-1 mx-1 mt-2"><a class="dropdown-item rounded" href="#">Action</a></li>
			<li class="p-1 mx-1 mx-1"><a class="dropdown-item rounded" href="#">Another action</a></li>
			<li class="p-1 mx-1 mx-1 mb-2"><a class="dropdown-item rounded" href="#">Something else here</a></li>
		</slot>
	</ul>
</div>
