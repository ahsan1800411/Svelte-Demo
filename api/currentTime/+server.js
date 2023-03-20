import { json } from '@sveltejs/kit';
export function GET() {
    console.log('Current Time');
    const time = new Date().toLocaleTimeString();
    return json(time);
}

export let prerender = true;
