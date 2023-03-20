
export const load = async (loadEvent) => {
    console.log('SErver')
    const { fetch } = loadEvent;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = res.json();
    return {
        posts,
        title: 'Total Number of Posts'
    }
}

// export let ssr = false