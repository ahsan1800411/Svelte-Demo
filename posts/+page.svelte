<script>
	export let data;
</script>

<h2>
	{data.title}
</h2>
{#each data.posts as post}
	<h1>{post.title}</h1>
{/each}
