
import { redirect } from '@sveltejs/kit'
export const load = async ({ params: { id }, fetch, url, route }) => {
    // console.log({ url, route })
    if (id > 100) {
        throw redirect(307, '/posts')
    }

    // throw error(400, {
    //     message: 'Oh no, the product you are looking for is not available',
    //     hint: 'Try the another product',
    // }) // this error message will show in the +error.svelte 


    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = res.json();
    return {
        post,
        title: 'Detail Post'
    }
}