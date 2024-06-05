<script>
	import XButton from './ui/XButton.svelte';
	import { activeTheme } from '../lib/stores/themestore';

	export let src = '';
	export let alt = '';
	export let title = '';
	export let content = '';
	export let href = '';
	export let linktext = '';

  $: bg = ($activeTheme === 'light' ? 'light' : 'dark' );

</script>

<div class="p-3 col-sm-12 col-md-6 col-lg-4 col-xl-3">
	<div class="card" data-bs-theme={bg}>
		<div style="position: relative;">
			<div style="position: absolute; top: 12px; right: 12px;">
				<XButton />
			</div>
		</div>
		<img {src} class="card-img-top object-fit-cover" {alt} />
		<div class="card-body">
			<h5 class="card-title">{title}</h5>
			<p class="card-text text-truncate">{content}</p>
			<a {href} class="btn btn-primary">{linktext}</a>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		// border: 1px solid #000;
		border-radius: 10px;
		// box-shadow: 0 4px 16px 16px rgba(0, 0, 0, 0.2);

		&[data-bs-theme='light'] {
			background-color: $white;
			color: black;
		}

		&[data-bs-theme='dark'] {
			background-color: $dark;
			color: $white;
		}

		img {
			height: 150px;
			object-fit: cover;
		}
	}

</style>
