import { json } from '@sveltejs/kit';
import { comments } from '../../../../lib/comments';

export async function GET(requestEvent) {
    const { params } = requestEvent;
    const { id } = params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return json(comment);
};

export async function PATCH(requestEvent) {
    const { params, request } = requestEvent;
    const { text } = await request.json()
    const { id } = params;
    let index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments[index] = {
        ...comments[index],
        text,
    }
    return json(comments);
}
