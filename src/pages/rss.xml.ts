import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import sanitizeHtml from "sanitize-html";

export async function GET(context: any) {
  const publishedBlogPosts = await getCollection(
    "blog",
    ({ data }) => !data.draft
  );
  return rss({
    title: "code.tnsi",
    description: "",
    site: context.site,
    items: publishedBlogPosts.map((post) => {
      const parsedMarkdown = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkHtml)
        .processSync(post.body);

      const htmlContent = sanitizeHtml(String(parsedMarkdown));

      return {
        title: post.data.title,
        pubDate: post.data.date,
        link: `/post/${post.slug}`,
        content: htmlContent,
      };
    }),
  });
}
