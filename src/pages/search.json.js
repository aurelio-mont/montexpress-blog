import { getCollection } from "astro:content";

async function getPost() {
    const posts = (await getCollection("posts")).sort((a, b)=> a.data.pubDate - b.data.pubDate);
    //return posts;
    return posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.slug}/`,
    }));
}
export async function GET({}) {
    return new Response(JSON.stringify(await getPost()), {
        status: 200,
        headers: {
            "Content-Type" : "application/json",
        },
    });
}