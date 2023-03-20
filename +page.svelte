<script>
	import { goto, preloadData } from '$app/navigation';
	function handleClick() {
		goto('/docs/1');
	}
	export let data;
</script>

<h1>Home Page</h1>
<h2>{data.loginUser}</h2>
<a href="/about">About</a>
<a href="/posts">Posts</a>
<button on:click={handleClick}>Docs</button>

<button
	on:mouseover={async () => {
		await preloadData('/posts');
	}}
	on:focus={async () => {
		await preloadData('/posts');
	}}
	on:click={() => {
		goto('/posts');
	}}>Go To Posts</button
>
