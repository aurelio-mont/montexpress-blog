import { rss } from '@astrojs/rss';
//import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    //items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `posts/${post.data.slug}`,
      pubDate: post.data.date,
      customData: `<language>en-us</language>`,
    })),
    customData: `<language>en-us</language>`,
  });
}