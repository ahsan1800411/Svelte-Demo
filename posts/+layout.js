export const load = async ({ fetch, parent }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = res.json();
    const parentData = await parent();
    return {
        title: "Number of Featured Products",
        posts,
        username: parentData.loginUser,
        sale: 'End of Sale Now!'
    }
}