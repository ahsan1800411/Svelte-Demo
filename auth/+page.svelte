<script>
	export let form;
	import { enhance } from '$app/forms';
</script>

<form method="post" action="?/login" use:enhance>
	<p>{form?.message || ''}</p>
	<input type="text" placeholder="username" name="username" />
	<input type="password" placeholder="password" name="password" />
	<button type="submit">Submit</button>
</form>
