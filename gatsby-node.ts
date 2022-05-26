import type { Actions, GatsbyNode, Reporter } from 'gatsby';
import path from 'path';
import { resolvePostUrl } from './src/utilities/resolvers/post-url-resolver';
import { resolveTagUrl } from './src/utilities/resolvers/tag-url-resolver';

const createTags = async (actions: Actions, reporter: Reporter, graphql) => {
  const { createPage } = actions;

  const result = await graphql(`
    query TagsQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createTags" query');
  }

  const tags = result.data.allMarkdownRemark.edges
    .flatMap(({ node }) => node.frontmatter.tags)
    .filter(n => n);
  const uniqueTags: Array<string> = Array.from(new Set(tags));

  uniqueTags.forEach((tag, index) => {
    createPage({
      path: resolveTagUrl(tag),
      component: path.resolve(`./src/templates/tag.tsx`),
      context: { tag: tag },
    });
  });
};

const createPosts = async (actions: Actions, reporter: Reporter, graphql) => {
  const { createPage } = actions;

  const result = await graphql(`
    query PostsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPosts" query');
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      path: resolvePostUrl('/posts', node.frontmatter),
      component: path.resolve(`./src/templates/post.tsx`),
      context: { id: node.id },
    });
  });
};

export const onPostBuild: GatsbyNode['onPostBuild'] = ({ reporter }) => {
  reporter.info('Site Built!');
};

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  reporter,
  graphql,
}) => {
  const { createPage } = actions;

  await createTags(actions, reporter, graphql);
  await createPosts(actions, reporter, graphql);
};
