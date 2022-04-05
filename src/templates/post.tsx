import { graphql, Link, PageProps } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/Layout/Layout';

const shortcodes = { Link }

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
        <div className="meta">
          <div className="meta-date">{post.frontmatter.date}</div>
        </div>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  );
};

export default Post;

const query = graphql`
  query PostQuery($id: String) {
    site {
      ...SiteMetadata
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
