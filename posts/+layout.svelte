<script>
	import { page } from '$app/stores';
	export let data;
	const { title, posts, username } = data;
</script>

<h2>{title}</h2>
<h4>{$page.data.sale}</h4>
<h2>This is {username}</h2>
{#each posts as post}
	<h2>{post.title}</h2>
{/each}
