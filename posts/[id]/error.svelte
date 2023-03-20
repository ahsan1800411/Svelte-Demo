<script>
	import { page } from '$app/stores';
	console.log(page.error);
</script>

<h1>
	{page.error.message}
</h1>
<h2>{page.error.hint}</h2>
