import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout/Layout';
import Link from '../components/Link/link';

const shortcodes = { Link };

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  mdx: {
    body: string;
    frontmatter: {
      title: string;
      date: Date;
    };
  };
};

const Post = ({ data }: PageProps<DataProps>) => {
  const post = data.mdx;
  return (
    <Layout siteTitle={data.site.siteMetadata.title}>
      <article className="mb-2">
        <h2 className="font-medium text-xl">{data.mdx.frontmatter.title}</h2>
        <div className="meta mb-1">
          <div className="meta-date">{post.frontmatter.date}</div>
        </div>
        <div className="prose prose-lg prose-slate max-w-none">
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={post.frontmatter}>
              {post.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query PostQuery($id: String) {
    site {
      ...SiteMetadata
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`;
